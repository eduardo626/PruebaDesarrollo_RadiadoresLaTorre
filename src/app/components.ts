import { AppComponent } from "./app.component";
import { DetailPokemonComponent } from "./components/detail-pokemon/detail-pokemon.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ListPokemonsComponent } from "./components/list-pokemons/list-pokemons.component";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { AbilitiesPokemonPipe } from "./pipes/AbilitiesPokemons.pipe";
import { MovesPokemonPipe } from "./pipes/MovesPokemons.pipe";
import { StatsPokemonPipe } from "./pipes/StatsPokemons.pipe";
import { TypesPokemonPipe } from "./pipes/TypesPokemons.pipe";

export const ComponentsApp = [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokemonsComponent,
    ListPokemonsComponent,
    DetailPokemonComponent,
    TypesPokemonPipe,
    StatsPokemonPipe,
    MovesPokemonPipe,
    AbilitiesPokemonPipe,
]