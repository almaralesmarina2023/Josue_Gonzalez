import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-resetas',
  templateUrl: './lista-resetas.component.html',
  styleUrls: ['./lista-resetas.component.css']
})
export class ListaResetasComponent {

  title='Recetas para vivir';

  constructor(private router: Router){};
  
  tirasDePollo(){
 this.router.navigate(['/receta1'])
}

};
