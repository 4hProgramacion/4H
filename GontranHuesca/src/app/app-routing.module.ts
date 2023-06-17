import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { Eje2Component } from './ejercicios/eje2/eje2.component';

const routes: Routes = [
  {path: 'eje1', component:Ejer1Component},
  {path: 'Home', component:Eje2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
