import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  @Input() content!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
