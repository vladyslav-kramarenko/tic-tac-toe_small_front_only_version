import { Component, OnInit } from '@angular/core';
import { ButtonName, RouterLinks } from '../../../../app.config';

@Component({
  selector: 'app-bot-game',
  templateUrl: './bot-game.component.html',
  styleUrls: ['./bot-game.component.scss']
})
export class BotGameComponent implements OnInit {
  readonly buttonName: typeof ButtonName = ButtonName;
  readonly routerLinks: typeof RouterLinks = RouterLinks;
  readonly linkForButton = ['/', RouterLinks.gameRoom, RouterLinks.start]

  constructor() { }

  ngOnInit(): void {
  }

}
