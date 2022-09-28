import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { ToGameBtnComponent } from './components/to-game-btn/to-game-btn.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { RulesComponent } from './components/rules/rules.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CheckViewportWidthPipe, FixedButtonVisibilityPipe } from './pipes';
import { StatisticComponent } from './components/statistic/statistic.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    StatisticComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule
  ],
  exports: [
    ToGameBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    StatisticComponent
  ]
})
export class SharedModule { }
