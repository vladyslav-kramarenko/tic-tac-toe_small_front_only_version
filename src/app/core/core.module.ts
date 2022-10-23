import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameCellComponent } from './components/game-field/game-cell/game-cell.component';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    GameFieldComponent,
    GameCellComponent,
    ClickOutsideDirective,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    GameFieldComponent,
    ClickOutsideDirective,
    LoaderComponent
  ]
})
export class CoreModule { }
