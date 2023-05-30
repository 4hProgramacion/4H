import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
protected url = 'http://localhost:8000/api4h/';

  constructor(private rutas:  HttpClient) { }

  public login(usuario: string,password: string): observable<any> {
    this.rutas.post(this.url + 'login', {usuario, password}). subscribe();

  }
}
