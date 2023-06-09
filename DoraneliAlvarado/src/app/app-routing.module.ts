import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejercicios/eje1/eje1.component';
import { Eje2Component } from './ejercicios/eje2/eje2.component';
import { Ejercicio3Component } from './ejercicios/eje3/eje3.component';


const routes: Routes = [
{path: 'eje1',component:Ejercicio1Component},
{path:'Home',component:Eje2Component},
{path: 'registro',component:Ejercicio3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

