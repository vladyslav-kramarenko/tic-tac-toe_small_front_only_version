import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.scss']
})
export class PasswordValidationComponent implements OnInit {
  @Input() isIncludeSpecialSymbol!: boolean;
  @Input() isIncludeCapitalLetterSymbol!: boolean;
  @Input() isIncludeLowerCaseLetterSymbol!: boolean;
  @Input() isMinLengthEnough!: boolean;
  @Input() isPasswordTouched!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
