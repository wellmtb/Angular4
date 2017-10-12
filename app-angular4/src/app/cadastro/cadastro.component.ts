import{Component} from '@angular/core';
import {ICurso} from '../classes/interface.curso';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
    
    /*template:`
    <div class="container margem">
        <h1> CADASTRO DE CURSOS </h1>
        <H3> Código: {{curso.codigo}}</H3>
        <H3> Descrição: {{curso.descricao}}</H3>
        <H3> Carga Horaria: {{curso.ch}}</H3>

    </div>   
    `*/


})
export class CadastroComponent{
    //simulação: definindo apenas um curso
    public curso: ICurso = {
        codigo: 10,
        descricao: 'NodeJS',
        ch: 24
    };
}