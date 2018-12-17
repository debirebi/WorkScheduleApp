import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CalendarEvent } from 'angular-calendar';
import {Calendarevent} from '../models/calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiURL = 'https://workscheduleapp.azurewebsites.net/api/event';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.apiURL);
  }

  addEvent(calEvent: Calendarevent): Observable<Calendarevent> {
    console.log(calEvent);
    return this.http.post<Calendarevent>(this.apiURL, calEvent);
  }
}
