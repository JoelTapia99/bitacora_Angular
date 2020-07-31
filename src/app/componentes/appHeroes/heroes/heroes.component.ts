import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../services/heroes.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroeService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.heroes = this._heroeService.getHeroes();

  }

  verHeroe( indice:number ){
    console.log(indice);
  }

  infoHeroe(indice: number){
    console.log(indice);
    this.router.navigate( ['/heroe',indice] );
  }


}
