import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejer1/ejercicio1/ejercicio1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ejercicio2Component } from './ejer1/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejer1/ejercicio3/ejercicio3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
