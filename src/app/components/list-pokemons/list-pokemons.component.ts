import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  @Input() pokemons: Pokemon[];
  @Output() link = new EventEmitter<string>();
  @Input() pokemonSelect: string;

  constructor() { }

  ngOnInit(): void {
  }

  showPokemon(url: string) {
    this.link.emit(url);
  }
}
