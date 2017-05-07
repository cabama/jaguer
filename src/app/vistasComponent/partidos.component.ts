import { Component } from '@angular/core';

@Component({
  selector: 'pagePartidos',
  template: `<h1>Estamos en la vista {{saludo}}</h1>`,
})
export class PagePartidosComponent  {

    public saludo = "Pagina Partidos";

    constructor (){
        //this.paginasText = ['Principal','Partidos', 'Resultados'];
    }

}
