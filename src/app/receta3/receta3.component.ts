import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta3',
  templateUrl: './receta3.component.html',
  styleUrls: ['./receta3.component.css']
})
export class Receta3Component {

  title = 'ARROZ CON POLLO Y PASAS';

  constructor(private router: Router){}
  
  volverInicio(){
 this.router.navigate(['/'])
  }

}
