import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  LoginByEmailQueryService } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
// Services
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  public loginInvalid: boolean = false;

  constructor(private fb: FormBuilder, public authService: AuthService, private loginService:LoginByEmailQueryService) {}

  async ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        //Attempt Login
        const username = this.form.controls['username'].value;
        const password = this.form.controls['password'].value;
        this.authService.login(username, password);
       
      } catch (err) {}
    } else {
    }
  }
}
