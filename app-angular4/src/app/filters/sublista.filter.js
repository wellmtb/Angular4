"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SubLista = (function () {
    function SubLista() {
    }
    SubLista.prototype.transform = function (curso, input) {
        //aerofunction =>
        return curso.filter(function (curso) { return curso.descricao.toLowerCase().includes(input.toLocaleLowerCase()); });
    };
    return SubLista;
}());
SubLista = __decorate([
    core_1.Pipe({
        name: 'subLista'
    })
], SubLista);
exports.SubLista = SubLista;
//# sourceMappingURL=sublista.filter.js.map