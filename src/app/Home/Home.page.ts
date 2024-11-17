import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'Home.page.html',
  styleUrls: ['Home.page.scss'],
})
export class HomePage  {

  constructor(private router:Router) 
  {
    setTimeout(() => {
      this.router.navigate(['/RegisterScreen']);
    }, 3000);
  }
}

