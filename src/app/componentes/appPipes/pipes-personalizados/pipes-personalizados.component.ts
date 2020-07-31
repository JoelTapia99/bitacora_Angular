import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styleUrls: ['./pipes-personalizados.component.css']
})
export class PipesPersonalizadosComponent implements OnInit {

  cadena: string = "esta es la muestra de pipes personalizados"

  estadoContrasenia: boolean = true;
  
  urlVideo: string = "https://www.youtube.com/embed/IDj_SBw3C_E";

  constructor() { }

  ngOnInit(): void {
  }

}
