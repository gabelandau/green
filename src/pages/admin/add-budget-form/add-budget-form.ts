import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../../providers/data';

@Component({
  selector: 'page-add-budget-form',
  templateUrl: 'add-budget-form.html'
})
export class AddBudgetFormModal {

  name: String;
  type: String;
  amount: Number;

  constructor(public viewCtrl: ViewController, public dataProvider: Data) {

  }

  ionViewDidLoad() {
    this.type = "fixed";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.dataProvider.addNewBudget(this.name, this.amount, this.type);
  }

}
