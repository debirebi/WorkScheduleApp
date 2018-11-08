
import { NgModule } from '@angular/core';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {CalendarHeaderComponent} from './calendar/calendar-header.componenet';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalComponent} from './calendar/calendar.component';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule, CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
  }), CalendarModule],
  declarations: [CalendarHeaderComponent, CalComponent],
  exports: [CalendarHeaderComponent, CalComponent]
})
export class AppModule {}
