import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {

  title= 'Conoce más sobre nosotros ';

  constructor(private router: Router){};
  
  volverInicio(){
 this.router.navigate(['/'])

};
};
