import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../authorization.service';
import { passwordPattern, minimumPasswordLength, PasswordInputTitle, RouterLinks } from '../../../../app.config';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    './sign-up.component.scss',
    '../../container/authorization.component.scss'
  ]
})
export class SignUpComponent implements OnInit {
  readonly routerLinks: typeof RouterLinks = RouterLinks;
  readonly passwordTitle: string = PasswordInputTitle.password;

  passwordSubscription$!: Observable<string>;

  registrationForm!: FormGroup;
  isIncludeSpecialSymbol!: boolean;
  isIncludeCapitalLetterSymbol!: boolean;
  isIncludeLowerCaseLetterSymbol!: boolean;
  isMinLengthEnough!: boolean;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.passwordSubscription$ = this.password.valueChanges.pipe(
      tap(value => this.validatePassword(value)),
      tap((value) => console.log(value))
    );
  }

  getEmailInputValue(email: string): void {
    this.email.setValue(email);
  }

  signUp(): void {
    if (this.registrationForm.valid) {
      const requestBody = {...this.registrationForm.value};
      delete requestBody.checkbox;
      this.authorizationService.signUp(requestBody).subscribe()
    }
  }

  private initForm(): void {
    this.registrationForm = this.fb.group({
      nickName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['',
        [
          Validators.required,
          Validators.pattern(passwordPattern)
         ]
      ],
      checkbox: [false, [Validators.required]]
    })
  }

  private validatePassword(password: string): any {
    this.isIncludeSpecialSymbol = this.isIncludeSpecialSymbols(password);
    this.isIncludeCapitalLetterSymbol = this.isIncludeCapitalLetter(password);
    this.isIncludeLowerCaseLetterSymbol = this.isIncludeLowerCaseLetter(password);
    this.isMinLengthEnough = this.isEnoughLength(password);
  }

  private isIncludeSpecialSymbols(password: string): boolean {
    const specialRegexp = /[!@#$%^&*]/g;
    return specialRegexp.test(password);
  }

  private isIncludeCapitalLetter(password: string): boolean {
    const capitalRegexp = /[A-Z, А-Я]/g;
    return capitalRegexp.test(password);
  }

  private isIncludeLowerCaseLetter(password: string): boolean {
    const loverCaseRegexp = /[a-z, а-я]/g;
    return loverCaseRegexp.test(password);
  }

  private isEnoughLength(password: string): boolean {
    return password.length >= minimumPasswordLength;
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

  get isPasswordTouched(): boolean {
    return this.password.touched;
  }

  get isPasswordValid(): boolean {
    return this.password.valid;
  }
}
