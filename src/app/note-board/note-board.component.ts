import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {

  notes: Note[];
  public currentUser: string;

  addNoteForm = new FormGroup( {
    user: new FormControl(''),
    text: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
    this.notes = [
      {user: 'Rebeka', text: 'Message example :) '},
      {user: 'Rebeka', text: 'Messgae example 2 '}
    ];
  }

  saveNote() {
    const note = this.addNoteForm.value;
    note.user = 'Rebeka';
    this.notes.push(note);
    this.addNoteForm.reset();
  }
}
