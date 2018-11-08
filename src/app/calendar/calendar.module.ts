import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { CalComponent } from './calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {AppModule} from '../app.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AppModule
  ],
  declarations: [CalComponent],
  exports: [CalComponent]
})
export class CalModule {}
