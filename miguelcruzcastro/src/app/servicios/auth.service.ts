import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
protected url = 'http://localhost:8000/api/';

constructor(private http:  HttpClient) { }




public login(user: any): Observable<any>{
  console.log(user);
  return this.http.post(this.url + 'login', user );
}
}
