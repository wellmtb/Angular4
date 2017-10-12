var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pessoa = (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        Pessoa.total += 1;
    }
    return Pessoa;
}());
Pessoa.total = 0;
var Aluno = (function (_super) {
    __extends(Aluno, _super);
    function Aluno(curso, nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Aluno.prototype.setCurso = function (curso) {
        this.curso = curso;
    };
    Aluno.prototype.getCurso = function () {
        return this.nome;
    };
    return Aluno;
}(Pessoa));
var Ponto = (function () {
    function Ponto() {
    }
    Ponto.prototype.ehQuadrado = function () {
        return this.x == this.y;
    };
    return Ponto;
}());
var Teste = (function () {
    function Teste() {
    }
    Teste.prototype.testar = function () {
        var aluno = new Aluno("Javascript", "Wellington", 25);
        aluno.setCurso("Angular 4");
        var ponto = new Ponto();
        ponto.x = 10;
        ponto.y = 10;
        alert(ponto.ehQuadrado() ? "É um quadrado" : "Não é um quadrado");
    };
    return Teste;
}());
//# sourceMappingURL=Pessoas.js.map