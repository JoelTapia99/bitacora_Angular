import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../../services/heroes.service";

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
  styleUrls: ['./info-heroe.component.css']
})
export class InfoHeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute ) {
      this.activatedRoute.params.subscribe(params =>{
      console.log(params);
      this.heroe = heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
      
    } )
  }

  ngOnInit(): void {
  }



}
