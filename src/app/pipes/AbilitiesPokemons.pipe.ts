import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from '../models/pokemon';

@Pipe({ name: 'AbilitiesPokemon' })
export class AbilitiesPokemonPipe implements PipeTransform {
    transform(value: Ability[]) {
        let abilities: string = "";
        value.forEach(abilitie => {
            abilities += `- ${abilitie.ability.name} `;
        });
        return abilities;
    }
}