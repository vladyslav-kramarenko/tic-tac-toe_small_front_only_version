import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.scss']
})
export class PasswordValidationComponent {
  @Input() isIncludeSpecialSymbol!: boolean;
  @Input() isIncludeCapitalLetterSymbol!: boolean;
  @Input() isIncludeLowerCaseLetterSymbol!: boolean;
  @Input() isMinLengthEnough!: boolean;
  @Input() isPasswordTouched!: boolean;
}
