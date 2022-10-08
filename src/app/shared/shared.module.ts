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
import { ComplexityComponent } from './components/complexity/complexity.component';
import { SymbolComponent } from './components/symbol/symbol.component';
import { RedirectAuthorizeComponent } from './components/modals/redirect-authorize/redirect-authorize.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SaveScoreComponent } from './components/modals/save-score/save-score.component';
import { LeaveRoundComponent } from './components/modals/leave-round/leave-round.component';
import { SuccessfullSavedComponent } from './components/modals/successfull-saved/successfull-saved.component';
import { ResetPasswordComponent } from './components/modals/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './components/message-page/confirm-account/confirm-account.component';
import { SentInstructionComponent } from './components/message-page/sent-instruction/sent-instruction.component';
import { WelcomeComponent } from './components/message-page/welcome/welcome.component';
import { PasswordComponent } from './components/message-page/password/password.component';
import { PasswordValidationComponent } from './components/password-validation/password-validation.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToGameBtnComponent,
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
    SaveScoreComponent,
    LeaveRoundComponent,
    SuccessfullSavedComponent,
    ResetPasswordComponent,
    ConfirmAccountComponent,
    SentInstructionComponent,
    WelcomeComponent,
    PasswordComponent,
    PasswordValidationComponent,
    PasswordInputComponent,
    EmailInputComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule,
  ],
  exports: [
    ToGameBtnComponent,
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
    SuccessfullSavedComponent,
    ResetPasswordComponent,
    ConfirmAccountComponent,
    SentInstructionComponent,
    WelcomeComponent,
    PasswordComponent,
    PasswordValidationComponent,
    PasswordInputComponent,
    EmailInputComponent
  ]
})
export class SharedModule { }
