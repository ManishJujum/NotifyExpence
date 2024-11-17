import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class chatwindowComponent implements OnInit {
  messages: any[] = [
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ];
  userMessage: string = '';

  // Suggestions array
  suggestions: string[] = ['Hello', 'Help', 'Tell me more', 'Thanks'];

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, sender: 'user' });
      this.botResponse(this.userMessage);
      this.userMessage = '';
    }
  }

  selectSuggestion(suggestion: string) {
    this.userMessage = suggestion;
    this.sendMessage();
  }

  botResponse(userMessage: string) {
    // Display initial "Thinking..." message
    this.messages.push({ text: 'Thinking...', sender: 'bot' });
  
    // Set timeout to update the message after 2 seconds
    setTimeout(() => {
      let botMessage = 'I am here to help!';
      if (userMessage.toLowerCase().includes('hello')) {
        botMessage = 'Hi there! How can I help you today?';
      } else if (userMessage.toLowerCase().includes('help')) {
        botMessage = 'Sure, what do you need help with?';
      } else if (userMessage.toLowerCase().includes('how much my main balence')) {
        botMessage = 'Your main balence is ₹1000000';
      } else if (userMessage.toLowerCase().includes('thanks')) {
        botMessage = 'You are welcome!';
      } else {
        botMessage = 'Can you clarify that?';
      }
  
      // Find the last message which is "Thinking..." and replace it
      const thinkingMessageIndex = this.messages.findIndex(msg => msg.text === 'Thinking...' && msg.sender === 'bot');
      if (thinkingMessageIndex !== -1) {
        this.messages[thinkingMessageIndex].text = botMessage;
      } else {
        // If no "Thinking..." message is found, just add the new response
        this.messages.push({ text: botMessage, sender: 'bot' });
      }
    }, 2000);
  }
  

  back() {
    this.router.navigate(['/dashboard']);
  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
  }




  constructor(private router: Router) {}

  ngOnInit() {}
}
