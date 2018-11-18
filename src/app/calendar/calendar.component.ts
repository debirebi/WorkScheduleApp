import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {colors} from './calendar.colors';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalComponent implements OnInit {
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = []
  clickedDate: Date;

  addEventForm = new FormGroup( {
    title: new FormControl(''),
    color: new FormControl(''),
    start: new FormControl('')
  });
  /// TODO Adding method for setting person to day.
  constructor(private router: Router) { this.fillCoded(); }

  ngOnInit() {
  }

  fillCoded() {
    this.events = [
      {title: 'Attila', color: colors.yellow, start: new Date('11/13/2018')},
      {title: 'Rebeka', color: colors.red, start: new Date('11/13/2018, 11:49:36 AM')},
      {title: 'Adnan', color: colors.blue, start: new Date('11/13/2018, 11:49:36 AM')}
    ];
    console.log(this.events);
  }
  saveEvent() {
    const calevent = this.addEventForm.value;
    if (this.addEventForm.controls.title.value === 'Attila') {
      calevent.title = 'Attila'
      calevent.color = colors.yellow;
      calevent.start = new Date(this.addEventForm.controls.start.value);
      console.log(calevent)
      this.events.push (calevent);
    }
    if (this.addEventForm.controls.title.value === 'Rebeka') {
      calevent.color = colors.red;
    }
    if (this.addEventForm.controls.title.value === 'Adnan') {
      calevent.color = colors.blue;
    }
    console.log(this.events);

    this.events.push (calevent);
    this.addEventForm.reset();
  }
}
