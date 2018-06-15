import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule   } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  // user = {
  //   email: '',
  //   password: ''
  // };

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.pattern(emailValidator), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signInWithFacebook() {
    console.log('login: facebook');
    this.authService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['palpite'])
      })
    .catch((err) => console.log(err));
  }


  signInWithGoogle() {
    console.log('login: google');
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['palpite'])
      })
    .catch((err) => console.log(err));
  }

  
  signInWithEmail() {
    let user: {email: string, password: string} = this.loginForm.value;
    console.log('login: email');
    this.authService.signInRegular(user.email, user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['palpite']);
      })
      .catch((err) => console.log('error: ' + err));
  }

}
