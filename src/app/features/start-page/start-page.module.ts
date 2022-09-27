import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    SharedModule
  ],
})
export class StartPageModule { }
