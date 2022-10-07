import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: [
    './password-input.component.scss',
    '../../../features/authorization/container/authorization.component.scss'
  ]
})
export class PasswordInputComponent {
  @Input() title!: string;

  @Output() passwordValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  private isPasswordVisible: boolean = false;

  iconSrc: string = '../../../../assets/img/eye.svg';

  onKeyDown() {
    this.passwordValue.emit(this.passwordInput.nativeElement.value);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.changeInputType();
    this.toggleImg();
  }

  private changeInputType() {
    this.passwordInput.nativeElement.type = this.isPasswordVisible ? 'text': 'password';
  }

  toggleImg(): void {
    this.iconSrc = this.isPasswordVisible ? '../../../../assets/img/crossed-eye.svg':  '../../../../assets/img/eye.svg';
  }
}
