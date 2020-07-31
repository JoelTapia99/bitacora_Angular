import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() indiceHeroe: number;

  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 
   // this.heroeSeleccionado = new EventEmitter(); //inicializo el evenEmitter
  }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log( this.indiceHeroe );
    this.router.navigate( ['/heroe',this.indiceHeroe] );

    // this.heroeSeleccionado.emit( this.indiceHeroe );
    
  }

}
