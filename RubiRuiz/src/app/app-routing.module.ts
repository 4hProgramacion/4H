import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eje1Component } from './ejercicios/eje1/eje1.component';
import { Eje2Component } from './ejercicios/eje2/eje2.component';
import { Eje3Component } from './ejercicios/eje3/eje3.component';

const routes: Routes = [
  {path: 'eje1', component:Eje1Component},
  {path: 'Home', component:Eje2Component},
  {path: 'eje3', component:Eje3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
