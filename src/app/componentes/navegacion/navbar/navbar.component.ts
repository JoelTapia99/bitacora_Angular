import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  alerta: boolean = false;

  constructor( private router:Router ) { }

  ngOnInit(): void {


  }

  buscarHeroes( termino:string ){
    if(termino == null || termino == ""){
      this.router.navigate(['/heroes']);
      this.alerta = true;
    }else{
      this.router.navigate(['/busqueda', termino]);
      console.log(termino);
      this.alerta = false;
    }
    
  }


}
