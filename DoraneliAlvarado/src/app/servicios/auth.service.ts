import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url= 'http://localhost:8000/api4h/';
  http: any;
  constructor(private rutas: HttpClient) { }

  public login(user: any): Observable<any>{
    return this.http.post(this.url + 'login', user );
  }
}
