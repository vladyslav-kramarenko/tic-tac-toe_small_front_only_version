import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink } from '../../app.config';
import { fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit, DoCheck {
  readonly routerLink: typeof RouterLink = RouterLink;
  scrollObserver$!: Observable<Event>;
  scrollHeight: number = 0;

  ngOnInit(): void {
    this.scrollObserver$ = fromEvent(document, 'scroll').pipe(
      tap(() => this.scrollHeight = window.scrollY)
    )
  }

  ngDoCheck() {
    console.log()
  }

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
