import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta1',
  templateUrl: './receta1.component.html',
  styleUrls: ['./receta1.component.css']
})
export class Receta1Component {
 title='TIRAS DE POLLO EMPANIZADA.';


  constructor(private router: Router){}
  
  volverInicio(){
 this.router.navigate(['/'])
  }

}
