import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private BaseUrl = "https://localhost:7256/Users/"
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUserByEP(email: string, password: string): Observable<User> {
    return this.httpClient.get<User>(this.BaseUrl + 'getByEmailPass/' + email + '/' + password, this.httpOptions)
  }

  addUser(user:User):Observable<any>{
    return this.httpClient.post<User>(this.BaseUrl ,user, this.httpOptions)
  
  }
}
