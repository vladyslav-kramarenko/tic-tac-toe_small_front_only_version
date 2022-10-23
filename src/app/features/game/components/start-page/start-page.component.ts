import { Component } from '@angular/core';
import { RouterLinks } from '../../../../app.config';
import { GameService } from '../../game.service';
import { Observable } from 'rxjs';
import { GameField } from '../../../../core/models/game.models';

@Component({
  selector: 'app-container',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  readonly fixedButtonVisibleHeight: number = 300;
  readonly fixedButtonVisibleWidth: number = 800;
  readonly routerLinks: typeof RouterLinks = RouterLinks;

  gameField$!: Observable<GameField>;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.initGameField();
  }

  onUpBtn(): void {
    const nav = document.querySelector('.nav')!;
    nav.scrollIntoView();
  }

  onPlayWithRobot(): void {
    this.gameService.clearField();
  }

  private initGameField(): void {
    this.gameField$ = this.gameService.gameField$;
  }
}
