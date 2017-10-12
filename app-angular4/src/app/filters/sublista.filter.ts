import {Pipe, PipeTransform} from '@angular/core';
import {ICurso} from '../classes/interface.curso';

@Pipe({
    name: 'subLista'
})
export class SubLista implements PipeTransform{
    transform(curso: ICurso[], input: string) : ICurso[]{

//aerofunction =>
        return curso.filter(curso => curso.descricao.toLowerCase().includes(input.toLocaleLowerCase()));
    }
}