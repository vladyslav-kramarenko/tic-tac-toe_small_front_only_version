import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs';
import { ModalConfig } from '../../core/models/dialog.models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  isDialogOpen$!: Observable<boolean>;
  modalConfig$!: Observable<ModalConfig>;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initDialog();
    this.initModalConfig();
  }

  closeDialog(): void {
    this.dialogService.close();
  }

  private initDialog(): void {
    this.isDialogOpen$ = this.dialogService.isModalOpen$;
  }

  private initModalConfig(): void {
    this.modalConfig$ = this.dialogService.modalConfig$;
  }
}
