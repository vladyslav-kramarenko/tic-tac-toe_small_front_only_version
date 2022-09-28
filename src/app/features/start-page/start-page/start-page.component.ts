import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  readonly fixedButtonVisibleHeight: number = 300;

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
