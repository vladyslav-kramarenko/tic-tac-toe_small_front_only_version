import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SIGN_IN_REQUEST_BODY, SIGN_UP_REQUEST_BODY } from '../models/authorization.models';
import { Observable } from 'rxjs';

const BASE_URL = 'https://q1n3z8hgcc.execute-api.eu-west-3.amazonaws.com/Dev/',
  SIGN_UP_URL = `${BASE_URL}api/SignUp`,
  SIGN_IN_URL = `${BASE_URL}api/SignIn`

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(body: SIGN_UP_REQUEST_BODY): Observable<unknown> {
    return this.http.post(SIGN_UP_URL, body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE, PATCH",
        "Content-Type" : "application/json; charset=UTF-8"
      }
    })
  }

  signIn(body: SIGN_IN_REQUEST_BODY): Observable<unknown> {
    return this.http.post(SIGN_IN_URL, body)
  }
}
