"use strict";
var logo_component_1 = require("../logo/logo.component");
var cadastro_component_1 = require("../cadastro/cadastro.component");
var lista_component_1 = require("../lista/lista.component");
var notFound_component_1 = require("../erro/notFound.component");
var masterdetail_component_1 = require("../masterdetail/masterdetail.component");
exports.appRoutes = [
    { path: "", component: logo_component_1.LogoComponent },
    { path: "cadastro", component: cadastro_component_1.CadastroComponent },
    { path: "lista", component: lista_component_1.ListaComponent },
    { path: "masterdetail", component: masterdetail_component_1.MasterDetailComponent },
    { path: "**", component: notFound_component_1.NotFoundComponent },
];
//# sourceMappingURL=app.routes.js.map