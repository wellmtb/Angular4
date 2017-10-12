import { Component } from '@angular/core';


@Component ({ 
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})
export class MenuComponent { 
    titulo_escola: string = "Impacta Treinamentos";
    titulo_cad: string = "Cadastro de cursos";
    titulo_lista: string = "Listagem de cursos";
    titulo_masterdetail = "Master/Detail";
}