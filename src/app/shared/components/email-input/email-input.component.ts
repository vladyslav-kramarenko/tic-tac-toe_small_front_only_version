import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss',
    '../../../features/authorization/container/authorization.component.scss'
  ]
})
export class EmailInputComponent {
  @Output() emailValue: EventEmitter<string> = new  EventEmitter<string>();

  @ViewChild('emailInput') emailInput!: ElementRef;

  onKeyDown() {
    this.emailValue.emit(this.emailInput.nativeElement.value);
  }
}
