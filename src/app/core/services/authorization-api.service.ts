import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/authorization.models';
import { Observable } from 'rxjs';

const BASE_URL = 'https://lebiew46c1.execute-api.eu-west-3.amazonaws.com/Dev/',
  SIGN_UP_URL = `${BASE_URL}api/SignUp`

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(body: User): Observable<unknown> {
    return this.http.post(SIGN_UP_URL, body)
  }
}
