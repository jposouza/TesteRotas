import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(private router: Router) { }

   ngOnInit(): void {
   }

   LogOn() {
      sessionStorage['token'] = 'xptoh26410x5=50';
      this.router.navigate(['protegido'])

   }

}
