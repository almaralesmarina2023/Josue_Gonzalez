import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta4',
  templateUrl: './receta4.component.html',
  styleUrls: ['./receta4.component.css']
})
export class Receta4Component {

  title= 'PAN CON JAMÓN EN MASA DE HOJALDRE';

  constructor(private router: Router){}
  
  volverInicio(){
 this.router.navigate(['/'])
  }

}
