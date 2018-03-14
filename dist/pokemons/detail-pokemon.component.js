"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service"); // on importe le service PokemonsService.
var DetailPokemonComponent = (function () {
    function DetailPokemonComponent(route, router, pokemonsService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemon = null;
    } // on injecte ce service pour pouvoir l'utiliser dans le composant.
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pokemonsService
                .getPokemon(id)
                .then(function (pokemon) { return (_this.pokemon = pokemon); });
        });
    };
    // On crée une méthode qui s'occupe de la redirection
    DetailPokemonComponent.prototype.goEdit = function (pokemon) {
        var link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    };
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon/all']);
    };
    return DetailPokemonComponent;
}());
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        template: "\n  <div *ngIf=\"pokemon\" class=\"row\">\n  <div class=\"col s12 m8 offset-m2\">\n  <h2 class=\"header center\">{{ pokemon.name }}</h2>\n  <div class=\"card horizontal hoverable\">\n    <div class=\"card-image\">\n      <img [src]=\"pokemon.picture\">\n    </div>\n    <div class=\"card-stacked\">\n      <div class=\"card-content\">\n        <table class=\"bordered striped\">\n          <tbody>\n            <tr>\n              <td>Nom</td>\n              <td><strong>{{ pokemon.name }}</strong></td>\n            </tr>\n            <tr>\n              <td>Points de vie</td>\n              <td><strong>{{ pokemon.hp }}</strong></td>\n            </tr>\n            <tr>\n              <td>D\u00E9g\u00E2ts</td>\n              <td><strong>{{ pokemon.cp }}</strong></td>\n            </tr>\n            <tr>\n              <td>Types</td>\n              <td>\n                <span *ngFor=\"let type of pokemon.types\" class=\"{{ type | pokemonTypeColor }}\">{{ type }}</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Date de cr\u00E9ation</td>\n              <td><em>{{ pokemon.created | date:\"dd/MM/yyyy\" }}</em></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-action\">\n        <a (click)=\"goBack()\">Retour</a>\n        <a (click)=\"goEdit(pokemon)\">Editer</a>\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>\n  <h4 *ngIf='!pokemon' class=\"center\">\n  <pkmn-loader></pkmn-loader>\n</h4>\n  ",
        providers: [] // on déclare un fournisseur pour le service.
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        pokemons_service_1.PokemonsService])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map