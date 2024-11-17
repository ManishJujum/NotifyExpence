import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-TransactionList',
  templateUrl: './TransactionList.coponent.html',
  styleUrls: ['./TransactionList.coponent.scss'],
})
export class TransactionListComponent implements OnInit {
    
    back()
    {
      this.router.navigate(['/dashboard']);  
    }

    transactions = [
        { description: 'Grocery Shopping', date: '2024-08-24', amount: -150.00 },
        { description: 'Salary Payment', date: '2024-08-22', amount: 2500.00 },
        { description: 'Dinner at Restaurant', date: '2024-08-20', amount: -85.50 },
        { description: 'Gym Membership', date: '2024-08-18', amount: -50.00 },
        { description: 'Freelance Payment', date: '2024-08-15', amount: 1200.00 },
        { description: 'Travel Cost', date: '2024-08-15', amount: 1500.00 },
        { description: 'Mobile Recharge', date: '2024-08-15', amount: 1200.00 },
        { description: 'TV Recharge', date: '2024-08-15', amount: 1200.00 },
      ];
      
  constructor(private router : Router)
  { 
  }  

  ngOnInit() {
  }

}
