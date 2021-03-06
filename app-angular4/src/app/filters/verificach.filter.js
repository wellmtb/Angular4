"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VerificaCh = (function () {
    function VerificaCh() {
    }
    VerificaCh.prototype.transform = function (valor) {
        if (valor < 40) {
            return "Carga horaria Baixa";
        }
        else if (valor >= 40 && valor < 60) {
            return "Carga horaria regular";
        }
        else {
            return "Carga horaria alta";
        }
    };
    return VerificaCh;
}());
VerificaCh = __decorate([
    core_1.Pipe({
        name: 'verificaCh'
    })
], VerificaCh);
exports.VerificaCh = VerificaCh;
//# sourceMappingURL=verificach.filter.js.map