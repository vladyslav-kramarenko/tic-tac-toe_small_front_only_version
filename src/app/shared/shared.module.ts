import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLinkWithHref } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ToGameBtnComponent } from './components/to-game-btn/to-game-btn.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { GameCellComponent } from './components/game-field/game-cell/game-cell.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { RulesComponent } from './components/rules/rules.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FixedButtonVisibilityPipe } from './pipes/fixed-button-visibility.pipe';


@NgModule({
  declarations: [
    NotFoundComponent,
    GameFieldComponent,
    GameCellComponent,
    FooterComponent,
    NavComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  exports: [
    GameFieldComponent,
    FooterComponent,
    NavComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe
  ]
})
export class SharedModule { }
