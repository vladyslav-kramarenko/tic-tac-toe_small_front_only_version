import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { RulesComponent } from './components/rules/rules.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CheckViewportWidthPipe, FixedButtonVisibilityPipe, GameResultPipe, SetCellIconPipe } from './pipes';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ComplexityComponent } from './components/complexity/complexity.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { RedirectAuthorizeComponent } from './components/modals/redirect-authorize/redirect-authorize.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LeaveRoundComponent } from './components/modals/leave-round/leave-round.component';
import { ConfirmDialogComponent } from './components/modals/confirm-dialog/confirm-dialog.component';
import { ConfirmAccountComponent } from './components/message-page/confirm-account/confirm-account.component';
import { SentInstructionComponent } from './components/message-page/sent-instruction/sent-instruction.component';
import { WelcomeComponent } from './components/message-page/welcome/welcome.component';
import { PasswordComponent } from './components/message-page/password/password.component';
import { PasswordValidationComponent } from './components/password-validation/password-validation.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogWindowModule } from '../features/dialog-window/dialog-window.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveScoreComponent } from './components/modals/save-score/save-score.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NotFoundComponent,
    BackBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    StatisticComponent,
    ComplexityComponent,
    SymbolComponent,
    RedirectAuthorizeComponent,
    ProfileComponent,
    LeaveRoundComponent,
    ConfirmDialogComponent,
    ConfirmAccountComponent,
    SentInstructionComponent,
    WelcomeComponent,
    PasswordComponent,
    PasswordValidationComponent,
    PasswordInputComponent,
    EmailInputComponent,
    SetCellIconPipe,
    GameResultPipe,
    SaveScoreComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule,
    MatButtonModule,
    DialogWindowModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    BackBtnComponent,
    UpButtonComponent,
    QuizComponent,
    RulesComponent,
    FixedButtonVisibilityPipe,
    CheckViewportWidthPipe,
    StatisticComponent,
    ComplexityComponent,
    SymbolComponent,
    RedirectAuthorizeComponent,
    ProfileComponent,
    LeaveRoundComponent,
    ConfirmDialogComponent,
    ConfirmAccountComponent,
    SentInstructionComponent,
    WelcomeComponent,
    PasswordComponent,
    PasswordValidationComponent,
    PasswordInputComponent,
    EmailInputComponent,
    SetCellIconPipe,
    GameResultPipe,
  ]
})
export class SharedModule { }
