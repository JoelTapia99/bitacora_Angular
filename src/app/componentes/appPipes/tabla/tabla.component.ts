import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  nombre: string = "Joel Tapia";
  PI: number = Math.PI;
  porcentaje: number = 0.235;

  date = new Date();


  heroe = {
    nombre: "Batman",
    bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    img: "assets/img/batman.png",
    aparicion: "1939-05-01",
    casa: "DC",
    direccion:{
      calle: "ABC",
      numeroCasa:"555"
    }
  }

  promesa = new Promise<string>( (resolve)=>{

    setTimeout(() => {
      resolve("respuesta de la promesa");
    }, 4500);

  } );

  constructor() { }

  ngOnInit(): void {
  }

}
