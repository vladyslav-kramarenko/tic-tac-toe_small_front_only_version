import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './container/authorization.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthNavComponent } from './auth-nav/auth-nav.component';


@NgModule({
  declarations: [
    AuthorizationComponent,
    SignUpComponent,
    SignInComponent,
    AuthNavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
