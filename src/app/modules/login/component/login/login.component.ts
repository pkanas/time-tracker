import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/store/auth-store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = FormGroup;
  errorMessage: string = '';
  constructor(private _formBuilder: FormBuilder,
    private _route: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
    });
  }

  loginButton() {
    if (this.form.value.username == 'admin' && this.form.value.password == 'admin@123') {
      AuthStore.setUser('admin');
      this._route.navigateByUrl('/record');
    } else if (this.form.value.username == 'test1' && this.form.value.password == 'test@123') {
      AuthStore.setUser('test');
      this._route.navigateByUrl('/record');
    } else {
      this.errorMessage = 'login failure.'
    }
  }

}
