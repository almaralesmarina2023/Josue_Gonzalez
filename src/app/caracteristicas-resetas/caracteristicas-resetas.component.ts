import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-caracteristicas-resetas',
  templateUrl: './caracteristicas-resetas.component.html',
  styleUrls: ['./caracteristicas-resetas.component.css']
})
export class CaracteristicasResetasComponent {


  constructor(private router: Router){}
  
  volverInicio(){
 this.router.navigate(['/'])
  }

}
