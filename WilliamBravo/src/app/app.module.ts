import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { FormsModule } from '@angular/forms';
import { Eje2Component } from './ejercicios/eje2/eje2.component';
import { Eje3Component } from './ejercicios/eje3/eje3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Eje2Component,
    Eje3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
