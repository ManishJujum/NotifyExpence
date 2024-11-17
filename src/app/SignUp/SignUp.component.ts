import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { login } from '../Model/SignInClass';

@Component({
  selector: 'app-sign-up',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss'],
})
export class SignUpComponent implements OnInit {

  SignUpForm : FormGroup;

  formData: login = {
    username: '',
    password: '',
    confirmPassword : ''
  };

  SignUp(formData:any)
  {
    this.router.navigate(['/login']);
  }

  Login()
  {
    this.router.navigate(['/login']);
  }

  constructor(private formBuilder: FormBuilder, private router : Router) { 
    this.SignUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {}

}
