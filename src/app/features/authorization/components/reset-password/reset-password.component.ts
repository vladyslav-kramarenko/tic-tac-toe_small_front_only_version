import { Component } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { MatDialog } from '@angular/material/dialog';
import {
  ResetPasswordDialogComponent
} from '../../../../shared/components/modals/reset-password/reset-password-dialog.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  email: string = '';

  constructor(
    private authorizationService: AuthorizationService,
    private dialog: MatDialog
  ) { }

  getEmailInputValue(email: string) {
    this.email = email;
  }

  onResetPasswordClick(): void {
    this.dialog.open(ResetPasswordDialogComponent, {
      panelClass: 'aaa'
    })
    // this.authorizationService.resetPassword(this.email).subscribe();
  }
}
