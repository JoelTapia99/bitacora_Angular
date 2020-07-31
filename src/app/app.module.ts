import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//servicios
import { HeroesService } from './services/heroes.service';

//componentes
import { NavbarComponent } from './componentes/navegacion/navbar/navbar.component';
import { BuscadorComponent } from './componentes/appHeroes/buscador/buscador.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/appHeroes/heroes/heroes.component';
import { HeroeTarjetaComponent } from './componentes/appHeroes/heroe-tarjeta/heroe-tarjeta.component';
import { TablaComponent } from './componentes/appPipes/tabla/tabla.component';
import { ResultadoBusquedaComponent } from './componentes/appHeroes/resultado-busqueda/resultado-busqueda.component';
import { InfoHeroeComponent } from './componentes/appHeroes/info-heroe/info-heroe.component';
import { PipesPersonalizadosComponent } from './componentes/appPipes/pipes-personalizados/pipes-personalizados.component';

//pipes
import { DomSeguroPipe } from './pipes/domSeguro/dom-seguro.pipe';
import { AllCapitalizarPipe } from './pipes/allCapitalizar/all-capitalizar.pipe';
import { ContraseniaPipe } from './pipes/contrasenia/contrasenia.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    HomeComponent,
    InfoHeroeComponent,
    ResultadoBusquedaComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    TablaComponent,
    PipesPersonalizadosComponent,
    AllCapitalizarPipe,
    DomSeguroPipe,
    ContraseniaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
