import{Component} from '@angular/core';
import {ICurso} from '../classes/interface.curso';
import {CursosService} from '../services/cursos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
    
    /*
    
    template:`
    <div class="container margem">
        <h1> Listagem de Cursos </h1>
    </div>   
    `
*/


})
export class ListaComponent{
    public ListaCursos: ICurso[];
    constructor(CursosService : CursosService){
        this.ListaCursos = CursosService.getListaCursos();
    }
    //definindo um array de Cursos
    /*
    public ListaCursos: ICurso[] = [

        {codigo: 11, descricao: 'ASP.NET', ch:40},
        {codigo: 12, descricao: 'Java Programer', ch:40},
        {codigo: 13, descricao: 'C# Fundamentos', ch:40},
        {codigo: 14, descricao: 'Lógica de Programação', ch:24},
    ] */
}