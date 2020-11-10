import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,Registration,Login } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjectService {

  api_urlReg="https://api09.herokuapp.com/register";
  api_urlLogin="https://api09.herokuapp.com/login ";

  constructor(private http:HttpClient) { }

  RegData(regDetails):Observable<Registration[]> //for registration
  {
     return this.http.post<Registration[]>(this.api_urlReg,regDetails);
  }

  LoginData(loginDetails):Observable<Login[]> //for login
  {
     return this.http.post<Login[]>(this.api_urlLogin,loginDetails);
  }

}

