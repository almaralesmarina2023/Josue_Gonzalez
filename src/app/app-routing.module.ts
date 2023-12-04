import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaResetasComponent } from './recetas/lista-resetas/lista-resetas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { CaracteristicasResetasComponent } from './caracteristicas-resetas/caracteristicas-resetas.component';
import { Receta1Component } from './receta1/receta1.component';
import { Receta2Component } from './receta2/receta2.component';
import { Receta4Component } from './receta4/receta4.component';
import { Receta3Component } from './receta3/receta3.component';




const appRoutes:Routes=[
  {path:'',component:ListaResetasComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'quienes-somos',component:QuienesSomosComponent},
  {path:'caracteristicas-resetas',component:CaracteristicasResetasComponent},
  {path:'receta1',component:Receta1Component},
  {path:'receta2',component:Receta2Component},
  {path:'receta3',component:Receta3Component},
  {path:'receta4',component:Receta4Component}

  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
