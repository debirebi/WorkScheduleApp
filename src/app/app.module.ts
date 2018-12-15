
import { NgModule } from '@angular/core';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {CalendarHeaderComponent} from './calendar/calendar-header.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalComponent} from './calendar/calendar.component';
import { NoteBoardComponent } from './note-board/note-board.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule, MatCardModule, CommonModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
  }), CalendarModule],
  declarations: [CalendarHeaderComponent, CalComponent],
  exports: [CalendarHeaderComponent, CalComponent]
})
export class AppModule {}
