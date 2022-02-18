import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, tap } from "rxjs/operators";
import { ApiResponse } from '../models/apiResponse';
import { DetailPokemon } from '../models/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private urlEndPoint = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  getPokemons(link: string = this.urlEndPoint) {
    return this.http.get(link).pipe(first(), map((res: ApiResponse) => res));
  }

  getPokemon(link: string) {
    return this.http.get(link).pipe(first(), map((res: DetailPokemon) => res));
  }
}
