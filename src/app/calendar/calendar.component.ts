import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {colors} from './calendar.colors';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user-service.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalComponent implements OnInit {
  /// TODO Adding method for setting person to day.
  constructor(private router: Router,
              private _eventService: EventService,
              private http: HttpClient,
              private _userService: UserService) {}

  calEvents: CalendarEvent[];
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[];    // equal database//
  clickedDate: Date;
  addEventForm = new FormGroup( {
    title: new FormControl(''),
    color: new FormControl(''),
    start: new FormControl('')
  });

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this._eventService.getEvents().subscribe(list => {
        list.forEach( event => event.start = new Date(event.start));
        console.log(list);
        return this.events = list;
      }
    );
}

  saveEvent() {
    const calevent = this.addEventForm.value;
    const user = this.addEventForm.controls.title.value;
    if (user === 'Attila') {
      calevent.title = user;
      calevent.color = colors.blue;
      calevent.start = new Date(this.addEventForm.controls.start.value).toString();
    }
    if (this.addEventForm.controls.title.value === 'Rebeka') {
      calevent.title = user;
      calevent.color = colors.red;
      calevent.start = new Date(this.addEventForm.controls.start.value).toString();
    }
    if (this.addEventForm.controls.title.value === 'Adnan') {
      calevent.title = user;
      calevent.color = colors.yellow;
      calevent.start = new Date(this.addEventForm.controls.start.value).toString();
    }
    this._eventService.addEvent(calevent).subscribe( () =>
      location.reload()
  );
  }

  getIsAdmin(): boolean {
    return this._userService.getIsAdmin();
  }
}
