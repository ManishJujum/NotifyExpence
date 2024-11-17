import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../Model/SignInClass';

@Component({
  selector: 'app-login',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  loginlist : login[]=[];

  
  formData = {
    username: '',
    password: ''
  };

  SignIn(formData:any)
  {
    this.route.navigate(['/dashboard']);
  }

  SignUp()
  {
    this.route.navigate(['/singup']);
  }

  constructor(private formBuilder: FormBuilder, private route : Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
