import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditPokemonComponent } from './edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { AuthGuard } from '../auth-guard.service';

// routes definition
const pokemonsRoutes: Routes = [
    {
        path: 'pokemon',
        canActivate: [AuthGuard],
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pokemonsRoutes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}
