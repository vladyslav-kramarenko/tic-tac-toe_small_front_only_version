import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterLinks } from '../../app.config';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthorizationComponent } from './container/authorization.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: RouterLinks.signUp,
            pathMatch: 'full'
          },
          {
            path: RouterLinks.signUp,
            component: SignUpComponent
          },
          {
            path: RouterLinks.signIn,
            component: SignInComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }

