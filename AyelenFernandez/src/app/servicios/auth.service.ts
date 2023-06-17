import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLostService {
  protected url = 'http://localhost:8000/api-4h/';

  constructor(private http: HttpClient) { }
  public getUsuarios(): Observable<any> {
    return this.http.get(this.url + 'ListadoUsuarios');
  }

  public ResgistrarUsuario(usuario: any): Observable<any>{
    return this.http.post(this.url + 'ResgistroUsuario' , usuario);
  }
}


