import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url= 'http://localhost:8000/api4h/';
  constructor(private rutas: HttpClient) { }
  public login(usuario: string, password: string): Observable<any>{
    this.rutas.post(this.url + 'login', {usuario, password});
  } 
  
}
