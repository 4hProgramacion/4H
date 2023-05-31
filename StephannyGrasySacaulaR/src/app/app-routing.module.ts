import { EnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eje1Component } from './Ejercicios/eje1/eje1.component';
import { Eje2Component } from './Ejercicios/eje2/eje2.component';
import { Eje3Component } from './Ejercicios/eje3/eje3.component';

const routes: Routes = [
  {path: 'eje1', component: Eje1Component},
  {path: 'Home', component: Eje2Component},
  {path: 'registro', component:Eje3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
