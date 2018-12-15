 import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
 import {FormControl, FormGroup} from '@angular/forms';

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

   constructor(private router: Router) {
   }

   ngOnInit() {
   }

   loginUser() {
     const user = this.loginForm.value;
     const username = user.username;
     const password = user.password;
     if (username === 'Rebeka' && password === '1234' || username === 'Attila' && password === '1234'
       || username === 'Adnan' && password === '1234' || username === 'Ági' && password === '1234') {
       this.router.navigate(['dashboard']);
     }
   }
 }
