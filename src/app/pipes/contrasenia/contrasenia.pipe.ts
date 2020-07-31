import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, argumento: boolean = false): String {
    
    return (argumento) ? '*'.repeat(value.length) : value;
  }

}
