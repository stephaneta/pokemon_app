import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
// importations ...
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// constructeur ...
// constructor(private http: Http) { }

@Injectable()
export class PokemonsService {
    // private http: Http;
    constructor(private http: Http) {}

    // Retourne tous les pokémons
    getPokemons(): Promise<Pokemon[]> {
        return this.http
            .get('app/pokemons')
            .toPromise()
            .then(response => response.json().data as Pokemon[])
            .catch(this.handleError);
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Promise<Pokemon> {
        const url = 'app/pokemons/' + id;

        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json().data as Pokemon)
            .catch(this.handleError);
    }

    // types de pokémons possible
    getPokemonTypes(): Array<string> {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'
        ];
    }

    // La méthode 'update' persiste les modifications d'un pokémon, dans l'API !
    update(pokemon: Pokemon): Promise<Pokemon> {
        const url = `app/pokemons/${pokemon.id}`;
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http
            .put(url, JSON.stringify(pokemon), headers)
            .toPromise()
            .then(() => pokemon)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Erreur : ', error); // on affiche simplement le message de l'erreur dans la console...
        return Promise.reject(error.message || error);
    }
}
