import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { RulesComponent } from './components/rules/rules.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CheckViewportWidthPipe, FixedButtonVisibilityPipe, GameResultPipe, SetCellIconPipe } from './pipes';
import { SymbolComponent } from './components/symbol/symbol.component';
// import { InfoDialogComponent } from './components/modals/info-dialog/info-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogWindowModule } from '../features/dialog-window/dialog-window.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    BackBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    SymbolComponent,
    // InfoDialogComponent,
    SetCellIconPipe,
    GameResultPipe,
    StopPropagationDirective,
    ClickOutsideDirective,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule,
    MatButtonModule,
    DialogWindowModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    BackBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    SymbolComponent,
    // InfoDialogComponent,
    SetCellIconPipe,
    GameResultPipe,
    StopPropagationDirective,
    ClickOutsideDirective,
    ProgressBarComponent
  ]
})
export class SharedModule { }
