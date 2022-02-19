import { Component, Input, OnInit } from '@angular/core';
import { DetailPokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  @Input() pokemon: DetailPokemon = null;

  constructor() { }

  ngOnInit(): void {
    
  }
}
