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
    header: new FormControl(''),
    text: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
    this.notes = [
      {id: this.ID++, header: 'okosak vagyunk', text: 'nagyooon kitakarítottatok!!!44'},
      {id: this.ID++, header: 'dliaj', text: 'dwiajdliajwldijwa'}
    ];
  }

  saveNote() {
    const note = this.addNoteForm.value;
    this.notes.push(note);
    this.addNoteForm.reset();
  }
}
