import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { Eje2Component } from './ejercicios/eje2/eje2.component';
import { Eje3Component } from './ejercicios/eje3/eje3.component';

const routes: Routes = [
  { path: 'ejer1', component:Ejer1Component},
  { path: 'Home', component:Eje2Component},
  { path: 'registro', component:Eje3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
