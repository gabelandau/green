import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../../providers/data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-edit-expense-form',
  templateUrl: 'edit-expense-form.html'
})
export class EditExpenseFormModal {

  date: String;
  name: String;
  amount: Number;
  budget: String;

  constructor(public viewCtrl: ViewController, public dataProvider: Data, public alertCtrl: AlertController, public params: NavParams) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.name = this.params.get('name');
    this.amount = this.params.get('amount');
    this.date = this.params.get('date');
    this.budget = this.params.get('budget');
  }

  submit() {
    //this.dataProvider.addNewExpense(this.name, this.date, this.amount, this.budget);
    let alert = this.alertCtrl.create({
      title: 'Expense Edited',
      subTitle: 'Your expense for ' + this.name + ' was edited.',
      buttons: ['OK']
    });
    alert.present();
    this.viewCtrl.dismiss();
  }

}
