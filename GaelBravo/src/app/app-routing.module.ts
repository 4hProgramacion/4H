import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eje1Component } from './ejer1/ejer1/ejer1.component';
import { Ejer2Component } from './ejer1/ejer2/ejer2.component';
import { Eje3Component } from './ejer1/ejer3/ejer3.component';

const routes: Routes = [
  { path: 'Login', component: Eje1Component },
  { path: 'Home', component: Ejer2Component },
  { path: 'Registro', component: Eje3Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }