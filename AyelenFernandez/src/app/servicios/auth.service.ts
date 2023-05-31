import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url = 'http://localhost:8000/api4h/';

  constructor(private rutas: HttpClient) { }
  public login(username: String, password: String): Observable<any> {
    this.rutas.post(this.url + 'login', { username, password});
  }
}