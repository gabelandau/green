import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../../providers/data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-add-budget-form',
  templateUrl: 'add-budget-form.html'
})
export class AddBudgetFormModal {

  name: String;
  type: String;
  amount: Number;

  constructor(public viewCtrl: ViewController, public dataProvider: Data, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.type = "fixed";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.dataProvider.addNewBudget(this.name, this.amount, this.type);
    let alert = this.alertCtrl.create({
      title: 'Budget Added',
      subTitle: 'Your budget for ' + this.name + ' was recorded.',
      buttons: ['OK']
    });
    alert.present();
    this.viewCtrl.dismiss();
  }

}
