import { Pipe, PipeTransform } from '@angular/core';
import { fromEvent, Observable, of, switchMap } from 'rxjs';

@Pipe({
  name: 'fixedButtonVisibility'
})
export class FixedButtonVisibilityPipe implements PipeTransform {
  scrollHeight!: number;

  transform(comparedValue: number): Observable<boolean> {
    return fromEvent(document, 'scroll').pipe(
      switchMap( () => of(window.scrollY > comparedValue ? true : false))
    )
  }
}
