import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BirthDay } from '../birthday';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  private BaseUrl = "https://localhost:7256/BirthDay/"
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  addBD(birthday:BirthDay){
    return this.httpClient.post<BirthDay>(this.BaseUrl, birthday, this.httpOptions)
  }

  getForUser(userId:number){
    return this.httpClient.get<BirthDay[]> (this.BaseUrl + userId, this.httpOptions);
  }
}
