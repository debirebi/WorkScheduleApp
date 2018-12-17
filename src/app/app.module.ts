
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent} from './header/header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule,
} from '@angular/material';
import {NoteBoardComponent} from './note-board/note-board.component';
import {CalendarHeaderComponent} from './calendar/calendar-header.component';
import {CalComponent} from './calendar/calendar.component';

@NgModule({
  declarations: [HeaderComponent,
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    NoteBoardComponent,
    CalendarHeaderComponent,
    CalComponent],
  imports: [BrowserAnimationsModule, MatCardModule, CommonModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    CalendarModule.forRoot({
      useFactory: adapterFactory,
      provide: DateAdapter
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
