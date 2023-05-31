import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*protected url = 'http://localhost:8000/api4h';
  
  constructor(private http: HttpClient){}
  
  public login(usuario: string, password: string): Observable<any>{
    this.http.post(this.url + 'login', { usuario, password});
  }*/
}
