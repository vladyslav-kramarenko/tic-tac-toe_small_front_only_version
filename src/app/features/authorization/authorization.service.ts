import { Injectable } from '@angular/core';
import { AuthorizationApiService } from '../../core/services';
import { User } from '../../core/models/authorization.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private authorizationApiService: AuthorizationApiService
  ) { }

  signUp(body: User): Observable<unknown> {
    return this.authorizationApiService.signUp(body);
  }
}
