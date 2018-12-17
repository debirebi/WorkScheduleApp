 import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
 import {FormControl, FormGroup} from '@angular/forms';
 import {UserService} from '../services/user-service.service';

 @Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   loginForm = new FormGroup( {
     username: new FormControl(''),
     password: new FormControl('')
   });

   errormessage = '';

   constructor(private router: Router, private _service: UserService) {
   }

   ngOnInit() {
   }

   loginUser() {
     const user = this.loginForm.value;
     const username = user.username;
     const password = user.password;
     this._service.login(username, password).subscribe(
       success => {
         window.alert('Login Successful!');
         this.router.navigateByUrl('/dashboard');
       }, error => {
         this.errormessage = error.message;
         window.alert('Username or Password incorrect!');
       }
     );
   }
 }
