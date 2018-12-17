import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteBoardService {

  apiURL = 'https://workscheduleapp.azurewebsites.net/api/note';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiURL);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiURL, note);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
