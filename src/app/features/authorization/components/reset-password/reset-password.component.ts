import { Component } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { DialogService } from '../../../dialog/dialog.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(
    private authorizationService: AuthorizationService,
    private dialogService: DialogService
  ) { }

  getEmailInputValue(email: string) {
    this.email = email;
  }

  onResetPasswordClick(): void {
    this.dialogService.open({
      modalType: 'confirm',
      content: 'We successfully received your data and sent data for reset password',
      description: 'Please go to your email to reset password'
    }).pipe(
      tap(v => console.log(v))
    ).subscribe();
    // this.authorizationService.resetPassword(this.email).subscribe();
  }
}
