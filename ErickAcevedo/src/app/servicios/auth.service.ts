import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url = 'http://localhost:8000/api4h/';

  constructor(private rutas: HttpClient) {}

  public login(usuario: string, password: string): Observable<any> {
    this.rutas.get(this.url + '/login', {usuario, password});
}
}