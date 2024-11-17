import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private intervalId: any;

  currentDate: string;
  constructor(private modalController: ModalController, private alertController: AlertController) {
    const now = new Date();
    this.currentDate = now.toLocaleString(); // Formats date and time as a string
  }

  //alert message for exceed amound
  ngOnInit() {
    // this.startAlertEvery2Seconds();
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Amound Exceed Alert',
      message: 'Your amount has exceeded the limit. Please do not make any further UPI payments!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  startAlertEvery2Seconds() {
    // Set an interval to show the alert every 2 seconds (2000ms)
    this.intervalId = setInterval(() => {
      this.showAlert();
    }, 10000); // 2000ms = 2 seconds
  } 

  //enable dark mode from here 
  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  mainBalance: any = 1000000;
  expenses: Array<{name: string, amount: number}> = [];
  expenseName: any;
  expenseAmount: any;
  balanceAmount: any;
  balanceStatus: any;

  addExpense() {
    if (this.expenseName && this.expenseAmount) {
      this.expenses.push({name: this.expenseName, amount: this.expenseAmount});
    }
    // Dismiss the modal
    this.dismiss();
  }

  addMainBalance() {
    if (this.balanceAmount && this.balanceStatus) {
      // Logic to update main balance with the new amount
      this.mainBalance += this.balanceAmount;
    }
    // Dismiss the modal
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}