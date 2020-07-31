import { Pipe, PipeTransform } from '@angular/core';
import { relative } from 'path';

@Pipe({
  name: 'allCapitalizar'
})

/*
este pipe recive un string y si el argumento es True devuelve todas
 las palabras con la primera letra en Mayuscula,
 si es falso el argumento solo devuelve la primera letra con mayuscula.
*/
export class AllCapitalizarPipe implements PipeTransform {

  transform(value: string, argumento:boolean = true ): string {
    
    value = value.toLocaleLowerCase();
    let cadena = value.split(' ');
    if( argumento ){
      cadena = cadena.map( cad =>{
        return cad[0].toLocaleUpperCase() + cad.substr(1);
      } );

      return cadena.join(' ');
    }else{
      cadena[0] = cadena[0][0].toLocaleUpperCase() + cadena[0].substr(1);
    }
    
    return cadena.join(' ');
  }

}
