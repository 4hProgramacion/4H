import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  protected url = 'http://localhost:8000/api/ListadoUsuarios/';

  constructor(private usuario: HttpClient) {}
  
  
  public getUsuarios():Observable<any>{
    return this.usuario.get(this.url);
  }
}
