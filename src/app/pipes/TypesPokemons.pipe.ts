import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../models/pokemon';

@Pipe({ name: 'TypesPokemon' })
export class TypesPokemonPipe implements PipeTransform {
    transform(value: Type[]) {
        let types: string = "";
        value.forEach(type => {
            types += `- ${type.type.name} `;
        });
        return types;
    }
}