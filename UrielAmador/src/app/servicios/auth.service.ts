import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  protected url = 'http://localhost:8000/api';
  constructor(private http: HttpClient){}
  public login(user: any): Observable<any>{
    return this.http.post(this.url + 'login', user );
  }
  /*export class UsuariosService {
    protected url = 'http://localhost:8000/api/ListadoUsuarios/';
    constructor(private http: HttpClient) {}
  
    public getUsuarios():Observable<any>{
      return this.http.get(this.url);
    }*/
}
