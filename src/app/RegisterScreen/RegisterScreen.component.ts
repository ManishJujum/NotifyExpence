import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-RegisterScreen',
  templateUrl: './RegisterScreen.component.html',
  styleUrls: ['./RegisterScreen.component.scss'],
})
export class RegisterScreenComponent implements OnInit {

  login()
  {
    this.router.navigate(['/login']);
  }

  SignUp()
  {
    this.router.navigate(['/singup']);
  }

  constructor(private router : Router)
  {

  }  

  ngOnInit() {
  }

}
