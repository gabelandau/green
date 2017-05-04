import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../../providers/data';

@Component({
  selector: 'page-add-account-form',
  templateUrl: 'add-account-form.html'
})
export class AddAccountFormModal {

  name: String;
  balance: Number;

  constructor(public viewCtrl: ViewController, public dataProvider: Data) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.dataProvider.addNewAccount(this.name, this.balance);
  }
}
