import {Component} from '@angular/core';
import {ICurso} from '../classes/interface.curso';
import {CursosService} from '../services/cursos.service';



@Component({
    moduleId: module.id,
    templateUrl: 'views/masterdetail.component.html'
})

export class MasterDetailComponent{
//para um curso selecionado
    public cursoSelecionado : ICurso;
    private novoCurso: ICurso;
    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item ;
    }




    public ListaCursos: ICurso[];
    constructor(CursosService : CursosService){
        this.ListaCursos = CursosService.getListaCursos();
    }
    //para a inclusão de um novo curso
    public novo() : void{
        this.novoCurso = {codigo:0, descricao:'', ch : 0 };
        this.cursoSelecionado = this.novoCurso;
    }
    public incluir (curso : ICurso) : void {
        this.ListaCursos.push(curso);
        alert('Curso incluido com sucesso');
    }
}