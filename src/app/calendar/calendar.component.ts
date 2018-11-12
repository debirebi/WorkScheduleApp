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
      title: 'Attila',
      color: colors.yellow,
      start: new Date()
    },
    {
      title: 'Rebeka',
      color: colors.blue,
      start: new Date()
    },
    {
      title: 'Adnan',
      color: colors.red,
      start: new Date('11/13/2018, 11:49:36 AM')
    }
  ];
  clickedDate: Date;

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
  /// TODO Adding method for setting person to day.
  constructor() { }

  ngOnInit() {
  }

}
