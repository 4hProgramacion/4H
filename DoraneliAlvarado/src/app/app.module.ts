import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Eje2Component } from './ejercicios/eje2/eje2.component';
import {HttpClientModule} from '@angular/common/http';
import { Ejercicio3Component } from './ejercicios/eje3/eje3.component';
import { Ejercicio1Component } from './ejercicios/eje1/eje1.component';
@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Eje2Component,
    Ejercicio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }