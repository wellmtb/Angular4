"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./rotas/app.routes"); // Deve vir primeiro
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var verificach_filter_1 = require("./filters/verificach.filter");
var sublista_filter_1 = require("./filters/sublista.filter");
//Usando as rotas
var logo_component_1 = require("./logo/logo.component");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var lista_component_1 = require("./lista/lista.component");
var notFound_component_1 = require("./erro/notFound.component");
var masterdetail_component_1 = require("./masterdetail/masterdetail.component");
//Services
var cursos_service_1 = require("./services/cursos.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.appRoutes), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            menu_component_1.MenuComponent,
            logo_component_1.LogoComponent,
            cadastro_component_1.CadastroComponent,
            lista_component_1.ListaComponent,
            notFound_component_1.NotFoundComponent,
            masterdetail_component_1.MasterDetailComponent,
            verificach_filter_1.VerificaCh,
            sublista_filter_1.SubLista],
        providers: [cursos_service_1.CursosService],
        bootstrap: [app_component_1.AppComponent] // indica qual o componente inicial da aplicação
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map