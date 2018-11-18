import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {

  ID = 1;
  notes: Note[];

  addNoteForm = new FormGroup( {
    user: new FormControl(''),
    text: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
    this.notes = [
      {id: this.ID++, user: 'Rebeka', text: 'nagyooon kitakarítottatok!!!44'},
      {id: this.ID++, user: 'Rebeka', text: 'dwiajdliajwldijwa'}
    ];
  }

  saveNote() {
    const note = this.addNoteForm.value;
    note.user = 'Rebeka';
    this.notes.push(note);
    this.addNoteForm.reset();
  }
}
