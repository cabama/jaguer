import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
// Componentes sueltos
import { AppComponent }  from './app.component';
import {BarraNavegacion}  from './componentes/barraNavegacion/barraNavegacion';
// Componentes Paginas
import {PageHomeComponent} from './vistasComponent/home.component'
import {PagePartidosComponent} from './vistasComponent/partidos.component'


@NgModule({
  imports:      [ BrowserModule, routing],
  declarations: [ AppComponent, BarraNavegacion, PageHomeComponent, PagePartidosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
