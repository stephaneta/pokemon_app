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
var ShadowCardDirective = (function () {
    function ShadowCardDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.setBorder('#f5f5f5');
        this.setHeight('180px');
    }
    ShadowCardDirective.prototype.onMouseEnter = function () {
        this.setBorder('#009688');
    };
    ShadowCardDirective.prototype.onMouseLeave = function () {
        this.setBorder('#f5f5f5');
    };
    ShadowCardDirective.prototype.setBorder = function (color) {
        var style = 'solid 4px ' + color;
        this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
    };
    ShadowCardDirective.prototype.setHeight = function (height) {
        this.renderer.setElementStyle(this.el.nativeElement, 'height', height);
    };
    return ShadowCardDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShadowCardDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShadowCardDirective.prototype, "onMouseLeave", null);
ShadowCardDirective = __decorate([
    core_1.Directive({ selector: '[pkmn-shadow-card]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ShadowCardDirective);
exports.ShadowCardDirective = ShadowCardDirective;
//# sourceMappingURL=shadow-card.directive.js.map