import { Component, OnInit } from '@angular/core';
import { PasswordInputTitle, RouterLinks } from '../../../../app.config';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../authorization.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.scss',
    '../../container/authorization.component.scss'
  ]
})
export class SignInComponent implements OnInit {
  readonly routerLinks: typeof RouterLinks = RouterLinks;
  readonly passwordTitle: string = PasswordInputTitle.createPassword;

  signInSubscription$!: Observable<any>;
  signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      this.signInSubscription$ = this.authorizationService.signIn(this.signInForm.value);
    }
  }

  getEmailInputValue(email: string): void {
    this.email.setValue(email);
  }

  private initForm(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get email(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  get isResetPasswordPage(): boolean {
    return this.router.url.includes(RouterLinks.resetPass);
  }
}
