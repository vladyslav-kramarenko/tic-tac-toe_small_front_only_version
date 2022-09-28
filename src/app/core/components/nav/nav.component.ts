import { Component, OnInit } from '@angular/core';
import { RouterLinks } from '../../../app.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  readonly routerLinks: typeof RouterLinks = RouterLinks;
  constructor() { }

  ngOnInit(): void {
  }

}
