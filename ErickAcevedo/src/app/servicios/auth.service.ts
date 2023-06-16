import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class UsuariosServices {
    protected url= 'http://localhost:8000/api/listadoUsuarios/';
    constructor(private http: HttpClient) { 

    } 
    
    public getUsuarios(): Observable<any>{
      return this.http.get(this.url)
    } 

    public RegistrarUsuario(usuario:any):Observable<any>{
      return this.http.post(this.url+'RegistroUsuarios',usuario);
    }
}