import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../../providers/data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-add-expense-form',
  templateUrl: 'add-expense-form.html'
})
export class AddExpenseFormModal {

  date: string;
  name: string;
  amount: number;
  budget: string;
  account: string;

  constructor(public viewCtrl: ViewController, public dataProvider: Data, public alertCtrl: AlertController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.dataProvider.load();
    let date = new Date();
    let string;

    date.setDate(date.getDate());
    string = (date.getFullYear() + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2));

    this.date = string;
  }

  submit() {
    this.dataProvider.addNewExpense(this.name, this.date, this.amount, this.budget, this.account);
    let alert = this.alertCtrl.create({
      title: 'Expense Added',
      subTitle: 'Your expense for ' + this.name + ' was recorded.',
      buttons: ['OK']
    });
    alert.present();
    this.viewCtrl.dismiss();
  }

}
