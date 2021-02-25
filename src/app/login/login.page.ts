import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../../Models/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  response: LoginModel;

  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router) { 
    this.LoginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5),
      ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    // .group >> Construct a new FormGroup instance.
    // group(controlsConfig: { [key: string]: any; }, options?: AbstractControlOptions): FormGroup
    this.username = this.LoginForm.controls.username;
    this.password = this.LoginForm.controls.password;

  }

  ngOnInit() {
  }
  doLogin(){
    const loginUrl  = 'https://wsrv.holymakkah.gov.sa/HMM_SB/Mathwa/Service1.svc/rest/login?';
    const res = this.http.get(loginUrl + 'user_name=' + this.username + '&password=' + this.password, {}).subscribe(res => {
      console.log(res)
      this.response = new LoginModel();
      
      switch (this.response.code) {
        case 100:
          break;
        case 404:
          console.log('"خطأ في اسم المستخدم أو كلمة المرور"')
        default:
          console.log('خطأ بالتسجيل مع الاستمرار بالبرنامج')
          this.router.navigate(['employee-list']);
      }
    });
  }
}
