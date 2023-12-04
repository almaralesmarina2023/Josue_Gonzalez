import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaResetasComponent } from './recetas/lista-resetas/lista-resetas.component';
import { ResetaComponent } from './recetas/lista-resetas/reseta/reseta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { AppRoutingModule } from './app-routing.module';
import { Receta1Component } from './receta1/receta1.component';
import { Receta2Component } from './receta2/receta2.component';
import { Receta3Component } from './receta3/receta3.component';
import { Receta4Component } from './receta4/receta4.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    ListaResetasComponent,
    ResetaComponent,
    ContactoComponent,
    QuienesSomosComponent,
    Receta1Component,
    Receta2Component,
    Receta3Component,
    Receta4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
