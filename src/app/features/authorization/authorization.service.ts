import { Injectable } from '@angular/core';
import { AuthorizationApiService } from '../../core/services';
import { SIGN_IN_REQUEST_BODY, SIGN_UP_REQUEST_BODY } from '../../core/models/authorization.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private authorizationApiService: AuthorizationApiService
  ) { }

  signUp(body: SIGN_UP_REQUEST_BODY): Observable<unknown> {
    return this.authorizationApiService.signUp(body);
  }

  signIn(body: SIGN_IN_REQUEST_BODY): Observable<unknown> {
    return this.authorizationApiService.signIn(body);
  }
}
