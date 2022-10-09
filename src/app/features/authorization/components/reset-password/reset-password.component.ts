import { Component } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) { }

  getEmailInputValue(email: string) {
    this.email = email;
  }

  onResetPasswordClick(): void {
    // this.authorizationService.resetPassword(this.email).pipe(
    //   switchMap(() => this.openConfirm())
    // ).subscribe();
    // this.openConfirm().pipe(
    //   switchMap((v) => this.router.navigate(['info']))
    // ).subscribe()
  }
}
