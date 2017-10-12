"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CursosService = (function () {
    function CursosService() {
    }
    CursosService.prototype.getListaCursos = function () {
        return [
            { codigo: 11, descricao: 'ASP.NET', ch: 40 },
            { codigo: 12, descricao: 'Java Programer', ch: 40 },
            { codigo: 13, descricao: 'C# Fundamentos', ch: 40 },
            { codigo: 14, descricao: 'Lógica de Programação', ch: 24 },
        ];
    };
    return CursosService;
}());
CursosService = __decorate([
    core_1.Injectable()
], CursosService);
exports.CursosService = CursosService;
//# sourceMappingURL=cursos.service.js.map