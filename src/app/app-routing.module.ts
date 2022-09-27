import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StartPageComponent } from './features/start-page/start-page/start-page.component';
import { RouterLink } from './app.config';

const routes: Routes = [
  {
    path: RouterLink.start,
    component: StartPageComponent
  },
  {
    path: RouterLink.termsAndConditions,
    loadChildren: () => import('./features/terms-and-conditions/terms-and-conditions.module')
      .then(m => m.TermsAndConditionsModule)
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
