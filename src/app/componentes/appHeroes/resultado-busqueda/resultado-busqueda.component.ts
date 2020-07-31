import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {
  
  heroes:any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesServices:HeroesService,
              private router: Router ) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesServices.buscarHeroes(this.termino);
      console.log(this.heroes);
    })

  }

  infoHeroe(indice: number){
    console.log(indice);
    this.router.navigate( ['/heroe',indice] );
  }


}
