
import { NgModule } from '@angular/core';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {CalendarHeaderComponent} from './calendar/calendar-header.componenet';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalComponent} from './calendar/calendar.component';
import { NoteBoardComponent } from './note-board/note-board.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
  }), CalendarModule],
  declarations: [CalendarHeaderComponent, CalComponent, NoteBoardComponent],
  exports: [CalendarHeaderComponent, CalComponent, NoteBoardComponent]
})
export class AppModule {}
