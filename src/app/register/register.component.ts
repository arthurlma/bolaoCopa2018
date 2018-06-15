import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.pattern(emailValidator), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordConfirmation: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    }, { validator: this.checkPassword });
  }

  ngOnInit() {
  }

  validateFields(): boolean {
    if (!this.registerForm.valid) {
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });

      if (this.registerForm.invalid)
        this.registerForm.markAsPending();
      return false;
    }
    return true;
  }

  checkPassword = (control: AbstractControl): { [key: string]: boolean } => {
    let pass = control.get('password');
    let passConfirm = control.get('passwordConfirmation');

    if (!pass || !passConfirm)
      return null;

    return pass.value === passConfirm.value ? null : { nomatch: true };
  }

  tryRegister() {
    if (this.validateFields) {
      // let user: { email: string, password: string } = this.registerForm.value;
      // console.log('register');
      // this.authService.createUserWithEmailAndPassword(user.email, user.password)
      //   .then((res) => {
      //     console.log(res);
      //     this.router.navigate(['login']);
      //   })
      //   .catch((err) => console.log('error: ' + err));
    }
  }

}
