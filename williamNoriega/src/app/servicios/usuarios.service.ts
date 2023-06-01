import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient){}
  public getUsuarios(): Observable<any>{
    return this.http.get('http://localhost:800/api4h/');
  }
}
