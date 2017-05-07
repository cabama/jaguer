import { Component } from '@angular/core';

class Paginador {
    public text:string;
    public enlace:string;
    public hoverClass:string;
    public url:string;
    constructor(text:string, url:string){
        this.text = text;
        this.url = url;
    }
    onOver(event:any){
        console.log('Se ha puesto en over el enlace: '+this.text);
        this.hoverClass = event.type == 'mouseover' ? 'selected' : '';
    }

}


@Component({
  selector: 'navBarras',
  templateUrl: './barraNavegacion.view.html'
})
export class BarraNavegacion  {

    public enlaces:Array<Paginador>;
    public paginasText = ['Principal','Partidos', 'Resultados'];
    public claseHover:string;

    constructor (){
        //this.paginasText = ['Principal','Partidos', 'Resultados'];
        this.enlaces = [new Paginador('Principal',''), new Paginador('Partidos','partidos'), new Paginador('Noticias','noticias')];
        this.claseHover = 'selected';
    }

    algo(algo:any){
        console.log(String(algo));
    }

}
