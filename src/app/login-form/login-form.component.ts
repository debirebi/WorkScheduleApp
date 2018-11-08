 import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

 @Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

   constructor(private router: Router) {
   }

   ngOnInit() {
   }

   loginUser(e) {
     e.preventDefault();
     console.log(e);
     const username = e.target.elements[0].value;
     const password = e.target.elements[1].value;
     if (username === 'Rebeka' && password === '1234' || username === 'Ati' && password === '1234'
       || username === 'Adnan' && password === '1234') {
       this.router.navigate(['dashboard']);
     }
   }
 }
