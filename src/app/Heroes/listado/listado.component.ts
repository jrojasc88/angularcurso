import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];

  borrado: string = ''; 

  borrarHeroe()
  {      
    this.borrado = this.heroes[0];  
    this.heroes.shift();
    /*if(this.borrado != undefined)
    {
      console.log(this.borrado);
    }
    else
    {
      this.borrado = 'Lista vacia.'    
    }*/
    
  }
}
