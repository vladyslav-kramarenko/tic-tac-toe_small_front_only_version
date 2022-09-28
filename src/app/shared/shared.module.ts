import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { ToGameBtnComponent } from './components/to-game-btn/to-game-btn.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { RulesComponent } from './components/rules/rules.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CheckViewportWidthPipe, FixedButtonVisibilityPipe } from './pipes';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
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
    CheckViewportWidthPipe
  ]
})
export class SharedModule { }
