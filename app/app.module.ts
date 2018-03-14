import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpModule } from '@angular/http'; // On importe de module
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        PokemonsModule, // L'odre de chargement des modules est très important
        LoginRoutingModule,
        AppRoutingModule, // pour l'ordre de déclaration des routes !
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
