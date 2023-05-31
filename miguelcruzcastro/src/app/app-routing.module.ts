import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { Ejer2Component } from './ejercicios/ejer2/ejer2.component';
import { Ejer3Component } from './ejercicios/ejer3/ejer3.component';

const routes: Routes = [
{path:'ejer1',component:Ejer1Component},
{path:'Home',component:Ejer2Component},
{path:'registro',component:Ejer3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
