import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailPokemon, Pokemon } from 'src/app/models/pokemon';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  nextPage: string = null;
  previusPage: string = null;
  totalPokemons: number = 0;
  pokemons = new BehaviorSubject<Pokemon[]>([]);
  pokemon = new BehaviorSubject<DetailPokemon>(null);

  constructor(private servicePoke: PokeService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.servicePoke.getPokemons().subscribe(res => {
      this.pokemons.next(res.results);
      this.nextPage = res.next;
      this.previusPage = res.previous;
      this.totalPokemons = res.count;
    });
  }

  loadNextPage() {
    this.servicePoke.getPokemons(this.nextPage).subscribe(res => {
      this.pokemons.next(res.results);
      this.nextPage = res.next;
      this.previusPage = res.previous;
      this.totalPokemons = res.count;
    });
  }

  loadPreviousPage() {
    this.servicePoke.getPokemons(this.previusPage).subscribe(res => {
      this.pokemons.next(res.results);
      this.nextPage = res.next;
      this.previusPage = res.previous;
      this.totalPokemons = res.count;
    });
  }

  loadPokemon(url: string) {
    this.servicePoke.getPokemon(url).subscribe(res => {
      this.pokemon.next(res);
    });
  }
}
