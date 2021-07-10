import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragabbleDirective } from './dragabble.directive';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragabbleDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
