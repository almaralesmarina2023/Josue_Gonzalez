import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta2',
  templateUrl: './receta2.component.html',
  styleUrls: ['./receta2.component.css']
})
export class Receta2Component {
  title = 'LOMO DE CERDO ASADO';

  constructor(private router: Router){}
  
  volverInicio(){
 this.router.navigate(['/'])
  }

}
