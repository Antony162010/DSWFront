import {Component} from '@angular/core';
import { ProjectServices } from 'src/app/services/createproject/project.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    
   proyectos: any = [];

   constructor(private projectServices: ProjectServices){
        this.proyectos = this.projectServices.getProjects();
        //console.log(this.proyectos);
   }



    /*
    Glosario:
    - Rating: número que ira del 1 al 5, servirá para saber que proyectos mostrar en la página principal
    (10: popular, ... , 1: no popular)
    */
}