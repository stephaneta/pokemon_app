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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var pokemon_search_service_1 = require("./pokemon-search.service");
var PokemonSearchComponent = (function () {
    function PokemonSearchComponent(pokemonSearchService, router) {
        this.pokemonSearchService = pokemonSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    PokemonSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PokemonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemons = this.searchTerms
            .debounceTime(300) // attendre 300ms de pause entre chaque requête
            .distinctUntilChanged() // ignorer la recherche en cours si c'est la même que la précédente
            .switchMap(function (term) {
            return term
                ?
                    _this.pokemonSearchService.search(term)
                :
                    Observable_1.Observable.of([]);
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]); // en cas d'erreur, on retourne un résultat vide
        });
    };
    PokemonSearchComponent.prototype.gotoDetail = function (pokemon) {
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    return PokemonSearchComponent;
}());
PokemonSearchComponent = __decorate([
    core_1.Component({
        selector: 'pokemon-search',
        template: "<div class=\"row\">\n  <div class=\"col s12 m6 offset-m3\">\n    <div class=\"card\">\n    <div class=\"card-content\">\n        <div class=\"input-field\">\n          <input #searchBox (keyup)=\"search(searchBox.value)\" placeholder=\"Rechercher un pok\u00E9mon...\" />\n        </div>\n  \n        <div class='collection'>\n          <a *ngFor=\"let pokemon of pokemons | async\"\n               (click)=\"gotoDetail(pokemon)\" class=\"collection-item\" >\n            {{ pokemon.name }}\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>",
        providers: [pokemon_search_service_1.PokemonSearchService]
    }),
    __metadata("design:paramtypes", [pokemon_search_service_1.PokemonSearchService,
        router_1.Router])
], PokemonSearchComponent);
exports.PokemonSearchComponent = PokemonSearchComponent;
//# sourceMappingURL=pokemon-search.component.js.map