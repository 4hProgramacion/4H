import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Eje1Component } from './ejer1/ejer1/ejer1.component';
import { Ejer2Component } from './ejer1/ejer2/ejer2.component';
import { Eje3Component } from './ejer1/ejer3/ejer3.component';

@NgModule({
  declarations: [
    AppComponent,
    Eje1Component,
    Ejer2Component,
    Eje3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }