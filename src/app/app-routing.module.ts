import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/appHeroes/heroes/heroes.component';
import { InfoHeroeComponent } from './componentes/appHeroes/info-heroe/info-heroe.component';
import { ResultadoBusquedaComponent } from './componentes/appHeroes/resultado-busqueda/resultado-busqueda.component';
import { TablaComponent } from './componentes/appPipes/tabla/tabla.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'pipes', component: TablaComponent },
  { path: 'heroe/:id', component: InfoHeroeComponent },
  { path: 'busqueda/:termino', component: ResultadoBusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
