import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../../providers/data';

@Component({
  selector: 'page-add-expense-form',
  templateUrl: 'add-expense-form.html'
})
export class AddExpenseFormModal {

  date: String;
  name: String;
  amount: Number;

  constructor(public viewCtrl: ViewController, public dataProvider: Data) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    let date = new Date();
    let string;

    date.setDate(date.getDate());
    string = (date.getFullYear() + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2));

    this.date = string;
  }

  submit() {
    this.dataProvider.addNewExpense(this.name, this.date, this.amount);
  }

}
