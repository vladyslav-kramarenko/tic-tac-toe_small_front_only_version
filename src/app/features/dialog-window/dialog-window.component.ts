import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent {
  @Output() onBackdropClick: EventEmitter<void> = new EventEmitter<void>();

  backDropEmitter(): void {
    this.onBackdropClick.emit();
  }
}
