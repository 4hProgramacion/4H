import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  protected url = 'http://localhost:8000/api4h';
  getUsuarios: any;
  constructor(private http: HttpClient){}
  public login(usuario: string, password: string): Observable<any>{
    return this.http.post(this.url + 'login', { usuario, password });
  }
}