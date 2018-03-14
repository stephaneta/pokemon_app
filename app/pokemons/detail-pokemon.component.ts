import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons'; // on peut supprimer cette ligne, nous n'en avons plus besoin.
import { PokemonsService } from './pokemons.service'; // on importe le service PokemonsService.

@Component({
    selector: 'detail-pokemon',
    template: `
  <div *ngIf="pokemon" class="row">
  <div class="col s12 m8 offset-m2">
  <h2 class="header center">{{ pokemon.name }}</h2>
  <div class="card horizontal hoverable">
    <div class="card-image">
      <img [src]="pokemon.picture">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <table class="bordered striped">
          <tbody>
            <tr>
              <td>Nom</td>
              <td><strong>{{ pokemon.name }}</strong></td>
            </tr>
            <tr>
              <td>Points de vie</td>
              <td><strong>{{ pokemon.hp }}</strong></td>
            </tr>
            <tr>
              <td>Dégâts</td>
              <td><strong>{{ pokemon.cp }}</strong></td>
            </tr>
            <tr>
              <td>Types</td>
              <td>
                <span *ngFor="let type of pokemon.types" class="{{ type | pokemonTypeColor }}">{{ type }}</span>
              </td>
            </tr>
            <tr>
              <td>Date de création</td>
              <td><em>{{ pokemon.created | date:"dd/MM/yyyy" }}</em></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a (click)="goBack()">Retour</a>
        <a (click)="goEdit(pokemon)">Editer</a>
      </div>
    </div>
  </div>
  </div>
  </div>
  <h4 *ngIf='!pokemon' class="center">
  <pkmn-loader></pkmn-loader>
</h4>
  `,
    providers: [] // on déclare un fournisseur pour le service.
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService
    ) {} // on injecte ce service pour pouvoir l'utiliser dans le composant.

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemonsService
                .getPokemon(id)
                .then(pokemon => (this.pokemon = pokemon));
        });
    }

    // On crée une méthode qui s'occupe de la redirection
    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }
}
