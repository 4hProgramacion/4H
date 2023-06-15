import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  protected url = 'http://localhost:8000/api/ListadoUsuarios/';
  constructor(private http: HttpClient) {}

  public getUsuarios():Observable<any>{
    return this.http.get(this.url + 'ListadoUsuarios');
  }

  public RegistrarUsuario(usuario:any):Observable<any>{
    return this.http.post(this.url + 'RegistroUsuario',usuario);
  }
}