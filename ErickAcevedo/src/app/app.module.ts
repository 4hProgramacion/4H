import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicio/ejer1/ejer1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ejer2Component } from './ejercicio/ejer2/ejer2.component';
import { Ejer3Component } from './ejercicio/ejer3/ejer3.component';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


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
