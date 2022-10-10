import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoomComponent } from './container/game-room/game-room.component';
import { RouterLinks } from '../../app.config';
import { StartPageComponent } from './components/start-page/start-page.component';
import { BotGameComponent } from './components/bot-game/bot-game.component';

const routes: Routes = [
  {
    path: '',
    component: GameRoomComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: RouterLinks.start,
            pathMatch: 'full'
          },
          {
            path: RouterLinks.start,
            component: StartPageComponent
          },
          {
            path: RouterLinks.botConfrontation,
            component: BotGameComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
