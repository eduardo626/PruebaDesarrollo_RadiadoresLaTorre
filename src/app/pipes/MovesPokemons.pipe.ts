import { Pipe, PipeTransform } from '@angular/core';
import { Move, Type } from '../models/pokemon';

@Pipe({ name: 'MovesPokemon' })
export class MovesPokemonPipe implements PipeTransform {
    transform(value: Move[]) {
        let moves: string = "";
        value.forEach(move => {
            moves += `- ${move.move.name} `;
        });
        return moves;
    }
}