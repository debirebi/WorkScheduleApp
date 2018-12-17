import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout(): Promise<boolean> {
    this._userService.logout();
    return this.router.navigateByUrl('/');
  }
}
