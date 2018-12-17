import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {FormControl, FormGroup} from '@angular/forms';
import {NoteBoardService} from '../services/note-board.service';
import {UserService} from '../services/user-service.service';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {

  notes: Note[];
  public currentUser: string;

  addNoteForm = new FormGroup( {
    text: new FormControl('')
  });
  constructor(private _notesService: NoteBoardService, private _userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this._notesService.getNotes().subscribe( list => {
      list.forEach( msg => msg.postDate = new Date(msg.postDate));
      this.notes = list;
      console.log(list);
    });
  }

  saveNote() {
    const note = new Note();
    note.user = this._userService.getUserName();
    note.postDate = new Date(Date.now());
    note.msgText = this.addNoteForm.controls.text.value;
    this._notesService.addNote(note).subscribe( () =>
    this.refresh()
    );
  }

  formatDateMsg(date: Date) {
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}
