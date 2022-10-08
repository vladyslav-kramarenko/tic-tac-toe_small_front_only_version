import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of } from 'rxjs';
import { ModalConfig } from '../../core/models/dialog.models';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly isModalOpen$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private modalConfig$$: BehaviorSubject<ModalConfig> = new BehaviorSubject<ModalConfig>({} as ModalConfig);
  private modalResult$$!: BehaviorSubject<any>;

  modalConfig$: Observable<ModalConfig> = this.modalConfig$$.asObservable();
  isModalOpen$: Observable<boolean> = this.isModalOpen$$.asObservable();
  modalResult$!: Observable<any>;

  constructor() { }

  open(modalConfig: ModalConfig): Observable<any> {
    this.initModalResult();
    this.modalConfig$$.next(modalConfig);
    this.isModalOpen$$.next(true);
    return this.modalResult$.pipe(
      filter(v => v)
    );
  }

  close(result: any = null): void {
    this.isModalOpen$$.next(false);
    if (this.modalResult$$) {
      this.modalResult$$.next(result);
    }
  }

  private initModalResult(): void {
    this.modalResult$$ = new BehaviorSubject<any>(null);
    this.modalResult$ = this.modalResult$$.asObservable();
  }
}
