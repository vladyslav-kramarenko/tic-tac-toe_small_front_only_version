import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink } from '../../app.config';
import { fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  readonly routerLink: typeof RouterLink = RouterLink;
  readonly fixedButtonVisibleHeight: number = 300;

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
