import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  loginValidator: boolean = false;

  onSubmit() {
    if (this.loginValidator) {
      localStorage.setItem('isAuthorized', 'true')
      this.router.navigate(['/users'])
    }
  }
}
