import {enableProdMode, NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {AppModule} from './app/app.module';
import {AppComponent} from './app/app.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {AppRoutingModule} from './app/app-routing.module';
import { HeaderComponent} from './app/header/header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatSidenavModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {NoteBoardComponent} from './app/note-board/note-board.component';



if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    NoteBoardComponent
  ],
  imports: [
    MatListModule,
    MatGridListModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    CalendarModule.forRoot({
      useFactory: adapterFactory,
      provide: DateAdapter
    })
  ],
  bootstrap: [AppComponent]
})
export class BootstrapModule {}

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
