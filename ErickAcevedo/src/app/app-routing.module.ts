import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicio/ejer1/ejer1.component';
import { Ejer2Component } from './ejercicio/ejer2/ejer2.component';
import { Ejer3Component } from './ejercicio/ejer3/ejer3.component';

const routes: Routes = [
  {path: 'eje1', component:Ejer1Component},
  {path: 'home', component:Ejer2Component},
  {path: 'registro', component:Ejer3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
