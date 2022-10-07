import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  email: string = '';

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  getEmailInputValue(email: string) {
    this.email = email;
  }

  onResetPasswordClick(): void {
    this.authorizationService.resetPassword(this.email).subscribe();
  }
}
