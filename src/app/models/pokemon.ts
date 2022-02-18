export interface Pokemon {
    name: string;
    url: string;
}

export interface DetailPokemon {
    sprite: Sprite
}

export interface Sprite {
    front_default: string;
    back_default: string;
}