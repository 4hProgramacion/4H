import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url = 'http://localhost:8000/api4H/';

  constructor(private rutas: HttpClient) {}

public login(usuario: string, password: string): Observable<any> {
  this.rutas.post(this.url + 'login', {usuario, password});
}
}