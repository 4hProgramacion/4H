import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: any;
  constructor(private rutas:  HttpClient) { }
protected url = 'http://localhost:8000/api4h/';



  public getUsuarios():Observable <any> {
    this.rutas.post(this.url + 'login', {usuario, password}). subscribe();

  }
  public RegistrarUsuario(usuario:any):Observable <any> {
    return this.http.post(this.url + 'RegistroUsuario',usuario);
  }
}
