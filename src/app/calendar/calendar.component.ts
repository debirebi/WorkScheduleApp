import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {colors} from './calendar.colors';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalComponent implements OnInit {
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Click me',
      color: colors.yellow,
      start: new Date()
    },
    {
      title: 'Or click me',
      color: colors.blue,
      start: new Date()
    }
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
