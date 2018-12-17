import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://workscheduleapp.azurewebsites.net/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiURL, {username, password}).pipe(
      map( res => {
        const user = res;

        if (user != null) {
          localStorage.setItem('currentUser', JSON.stringify({username: username, isAdmin: res.isAdmin}));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getIsAdmin(): boolean {
    if (localStorage.getItem('currentUser') === null) {
      return false;
    } else {const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.isAdmin === true) {
        return true;
      } if (currentUser.isAdmin === false) {
        return false;
      }
    }
  }

  getUserName(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
