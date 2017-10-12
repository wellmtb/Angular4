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
var cursos_service_1 = require("../services/cursos.service");
var MasterDetailComponent = (function () {
    function MasterDetailComponent(CursosService) {
        this.ListaCursos = CursosService.getListaCursos();
    }
    MasterDetailComponent.prototype.selecionar = function (item) {
        this.cursoSelecionado = item;
    };
    //para a inclusão de um novo curso
    MasterDetailComponent.prototype.novo = function () {
        this.novoCurso = { codigo: 0, descricao: '', ch: 0 };
        this.cursoSelecionado = this.novoCurso;
    };
    MasterDetailComponent.prototype.incluir = function (curso) {
        this.ListaCursos.push(curso);
        alert('Curso incluido com sucesso');
    };
    return MasterDetailComponent;
}());
MasterDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'views/masterdetail.component.html'
    }),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], MasterDetailComponent);
exports.MasterDetailComponent = MasterDetailComponent;
//# sourceMappingURL=masterdetail.component.js.map