import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  protected url="http://localhost:8000/api/";

  public getUsuarios(): Observable <any> {
    return this.http.get(this.url+'ListadoUsuarios');
  }
  public RegistrarUsuario(usuario:any):Observable <any> {
    return this.http.post(this.url + 'RegistroUsuario',usuario);
  }
}
