import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'verificaCh'
})

export class VerificaCh implements PipeTransform {
    transform(valor: number) : string{
        if(valor < 40){
            return "Carga horaria Baixa";
        }else if ( valor >= 40 && valor < 60){
            return "Carga horaria regular"
        }else{
            return "Carga horaria alta"
        }
    }

}