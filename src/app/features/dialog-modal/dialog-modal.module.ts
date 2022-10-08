import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModalComponent } from './dialog-modal.component';

import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    DialogModalComponent
  ]
})
export class DialogModalModule { }
