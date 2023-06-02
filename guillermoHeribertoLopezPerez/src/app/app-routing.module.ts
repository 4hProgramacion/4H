import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejer1/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejer1/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejer1/ejercicio3/ejercicio3.component';

const routes: Routes = [
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'home', component: Ejercicio2Component },
  { path: 'register', component: Ejercicio3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
