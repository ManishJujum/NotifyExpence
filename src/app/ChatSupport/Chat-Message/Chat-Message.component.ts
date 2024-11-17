import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class chatmessageComponent implements OnInit {
    @Input() message: any;
  constructor(private router : Router)
  { 
  }  

  ngOnInit() {
  }

}
