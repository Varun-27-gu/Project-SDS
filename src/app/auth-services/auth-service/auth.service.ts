import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/api/authapi/auth';  // ✅ String, not array

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signupUser(signuprequest: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/user/signup`, signuprequest);  // ✅ Correct URL formatting
  }

  signupAdmin(signuprequest: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/admin/signup`, signuprequest);  // ✅ Correct URL formatting
  }  

  login(loginRequest : any): Observable<any>{
    return this.http.post(`${BASIC_URL}/login`, loginRequest);

  }
}
