import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from '../models/pokemon';

@Pipe({ name: 'StatsPokemon' })
export class StatsPokemonPipe implements PipeTransform {
    transform(value: Stat[]) {
        let stats: string = "";
        value.forEach(stat => {
            stats += `- ${stat.stat.name}(${stat.base_stat}) `;
        });
        return stats;
    }
}