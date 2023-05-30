import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ejer2Component } from './ejercicios/ejer2/ejer2.component';
import { Ejer3Component } from './ejercicios/ejer3/ejer3.component';
import {HttpClientModule } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Ejer2Component,
    Ejer3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
