import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isNotUser = false;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.loginForm.valid);
    if (this.loginForm.invalid) {
      return;
    } else {
      this.isNotUser = true;
      let confirmaiton = this.loginService.loginUser(this.loginForm.value.username, this.loginForm.value.password);
      if (confirmaiton) {
        this.router.navigate(['/profile']);
      } else {
        this.isNotUser = true;
      }
    }
  }
}
