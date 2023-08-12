import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  loginForm: FormGroup;

  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('isAuthorized', 'true')
      this.router.navigate(['/users'])
    }
  }
}
