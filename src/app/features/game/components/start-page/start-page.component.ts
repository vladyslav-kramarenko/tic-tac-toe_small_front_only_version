import { Component } from '@angular/core';
import { RouterLinks } from '../../../../app.config';

@Component({
  selector: 'app-container',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  readonly fixedButtonVisibleHeight: number = 300;
  readonly fixedButtonVisibleWidth: number = 800;
  readonly routerLinks: typeof RouterLinks = RouterLinks;

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }
}
