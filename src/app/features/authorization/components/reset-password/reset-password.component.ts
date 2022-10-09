import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { AuthorizationService } from '../../authorization.service';
import { ConfirmDialogComponent } from '../../../../shared/components/modals/confirm-dialog/confirm-dialog.component';
import { RouterLinks } from '../../../../app.config';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(
    private authorizationService: AuthorizationService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  getEmailInputValue(email: string) {
    this.email = email;
  }

  onResetPasswordClick(): void {
    this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: false,
      data: {
        content: 'We successfully received your data and sent data for reset password',
        description: 'Please go to your email to reset password'
      }
    }).afterClosed().pipe(
      tap(() => this.router.navigate([ RouterLinks.confirmReset ]))
    ).subscribe()
    // this.authorizationService.resetPassword(this.email).subscribe();
  }
}
