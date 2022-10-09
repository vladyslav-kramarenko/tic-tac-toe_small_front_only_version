import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StartPageComponent } from './features/start-page/container/start-page.component';
import { RouterLinks } from './app.config';
import { ConfirmResetComponent } from './features/authorization/components/confrim-reset/confirm-reset.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouterLinks.start
  },
  {
    path: RouterLinks.start,
    component: StartPageComponent
  },
  {
    path: RouterLinks.confirmReset,
    component: ConfirmResetComponent
  },
  {
    path: RouterLinks.termsAndConditions,
    loadChildren: () => import('./features/terms-and-conditions/terms-and-conditions.module')
      .then(m => m.TermsAndConditionsModule)
  },
  {
    path: RouterLinks.authorization,
    loadChildren: () => import('./features/authorization/authorization.module')
      .then(m => m.AuthorizationModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
