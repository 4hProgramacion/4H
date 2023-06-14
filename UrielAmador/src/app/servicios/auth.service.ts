import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  protected url= 'http://localhost:8000/api4h/';
  constructor(private rutas: HttpClient) { }
  public login(usuario: string, password: string): Observable<any>{
    return this.rutas.post(this.url + 'login', { usuario, password });
  }
  /*export class UsuariosService {
    protected url = 'http://localhost:8000/api/ListadoUsuarios/';
    constructor(private http: HttpClient) {}
  
    public getUsuarios():Observable<any>{
      return this.http.get(this.url);
    }*/
}
