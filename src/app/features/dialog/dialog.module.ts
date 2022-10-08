import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [ DialogComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [ DialogComponent ]
})
export class DialogModule { }
