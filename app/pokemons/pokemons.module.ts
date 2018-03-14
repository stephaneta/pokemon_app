import { PokemonSearchComponent } from './pokemon-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { LoaderComponent } from './loader.component';
import { AuthGuard } from '../auth-guard.service';

@NgModule({
    imports: [CommonModule, FormsModule, PokemonRoutingModule],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        ShadowCardDirective,
        PokemonTypeColorPipe,
        PokemonSearchComponent,
        LoaderComponent
    ],
    providers: [PokemonsService, AuthGuard]
})
export class PokemonsModule {}
