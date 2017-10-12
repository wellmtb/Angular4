class Pessoa {
    static total: number = 0;

    constructor (protected nome: string , protected idade: number){
        Pessoa.total += 1;
    }
}

class Aluno extends Pessoa {
    private curso: string;

    public setCurso(curso: string): void {
        this.curso = curso;
    }

    public getCurso(): string {
        return this.nome;
    }
   
    constructor(curso: string, nome: string, idade: number){
        super(nome, idade);
    }
}

interface IPonto {
    x: number;
    y: number;

    ehQuadrado():boolean;
}

class Ponto implements IPonto {
    public x: number;
    public y: number;

    public ehQuadrado(): boolean{
        return this.x == this.y;
    }
}

class Teste{
    public testar(): void{
    let aluno = new Aluno("Javascript","Wellington", 25);
    aluno.setCurso("Angular 4");

    let ponto = new Ponto();
    ponto.x = 10;
    ponto.y = 10;

    alert(ponto.ehQuadrado() ? "É um quadrado":"Não é um quadrado");

    }
}