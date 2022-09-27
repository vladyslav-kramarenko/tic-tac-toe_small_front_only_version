import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  scrollObserver$!: Observable<Event>;
  scrollHeight: number = 0;

  ngOnInit(): void {
    this.scrollObserver$ = fromEvent(document, 'scroll').pipe(
      tap(() => this.scrollHeight = window.scrollY)
    )
  }

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
