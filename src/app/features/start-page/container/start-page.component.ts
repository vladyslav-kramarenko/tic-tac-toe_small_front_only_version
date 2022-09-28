import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  readonly fixedButtonVisibleHeight: number = 300;
  readonly fixedButtonVisibleWidth: number = 800;

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
