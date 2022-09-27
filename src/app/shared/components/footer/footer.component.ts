import { Component } from '@angular/core';
import { RouterLink } from '../../../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly routerLink: typeof RouterLink = RouterLink;
}
