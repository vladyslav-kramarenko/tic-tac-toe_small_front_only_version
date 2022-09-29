import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';
import { PasswordInputTitle, RouterLinks } from '../../../app.config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    './sign-up.component.scss',
    '../container/authorization.component.scss'
  ]
})
export class SignUpComponent implements OnInit {
  readonly routerLinks: typeof RouterLinks = RouterLinks;
  readonly passwordTitle: string = PasswordInputTitle.password;

  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onPasswordKeyDown(inputValue: string) {
    this.password.setValue(inputValue);
  }

  signUp(): void {
    const requestBody = {...this.registrationForm.value};
    delete requestBody.checkbox;
    this.authorizationService.signUp(requestBody).subscribe()
  }

  private initForm(): void {
    this.registrationForm = this.fb.group({
      nickName: '',
      email: '',
      password: '',
      checkbox: false
    })
  }

  get nickName(): FormControl {
    return this.registrationForm.get('nickName') as FormControl;
  }

  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  get checkbox(): FormControl {
    return this.registrationForm.get('checkbox') as FormControl;
  }
}
