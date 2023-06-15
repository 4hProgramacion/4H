import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  RegistrarUsuario(value: any) {
    throw new Error('Method not implemented.');
  }
  RegistroUsuario(value: any) {
    throw new Error('Method not implemented.');
  }
  protected url="http://localhost:8000/api/ListadoUsuarios/";
  constructor(private http:HttpClient) { }
  public getUsuarios(): Observable <any> {
    return this.http.get(this.url);
  }
}
