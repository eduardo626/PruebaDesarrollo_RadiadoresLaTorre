export interface Pokemon {
    name: string;
    url: string;
}

export interface DetailPokemon {
    sprite: Sprite,
    abilities: Ability[],
    base_experience: number;
    moves: Move[]
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