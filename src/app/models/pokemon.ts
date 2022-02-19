export interface Pokemon {
    name: string;
    url: string;
}

export interface DetailPokemon {
    id: number,
    name: string,
    sprite: Sprite,
    abilities: Ability[],
    base_experience: number;
    moves: Move[],
    stats: Stat[],
    types: Type[]
}

export interface Sprite {
    front_default: string;
    back_default: string;
}

export interface Ability {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}

export interface Move {
    move: {
        name: string,
        url: string
    }
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Type {
    type: {
        name: string,
        url: string;
    }
}