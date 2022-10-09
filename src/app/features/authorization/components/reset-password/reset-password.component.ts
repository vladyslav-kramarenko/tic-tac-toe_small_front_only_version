import { Component } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { DialogService } from '../../../dialog/dialog.service';
import { Observable, switchMap, tap } from 'rxjs';
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
    private dialogService: DialogService,
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
    this.openConfirm()
  }

  private openConfirm() {
    this.dialogService.open({
      modalType: 'confirm',
      content: 'We successfully received your data and sent data for reset password',
      description: 'Please go to your email to reset password'
    }).subscribe({
      complete: () => this.router.navigate(['info'])
    })
  }
}
