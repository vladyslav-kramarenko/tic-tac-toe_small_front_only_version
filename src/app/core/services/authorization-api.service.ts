import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SIGN_IN_REQUEST_BODY, SIGN_UP_REQUEST_BODY } from '../models/authorization.models';
import { Request_Url } from '../../app.config';

const BASE_URL = 'https://q1n3z8hgcc.execute-api.eu-west-3.amazonaws.com/Dev/';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(body: SIGN_UP_REQUEST_BODY): Observable<unknown> {
    return this.http.post(`${BASE_URL}${Request_Url.signUp}`, body)
  }

  signIn(body: SIGN_IN_REQUEST_BODY): Observable<unknown> {
    return this.http.post(`${BASE_URL}${Request_Url.signIn}`, body)
  }

  resetPassword(email: string): Observable<unknown> {
    return this.http.get(`${BASE_URL}${Request_Url.resetPass}/${email}`)
  }
}
