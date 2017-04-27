import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public navCtrl: NavController, public dataProvider: Data) {

  }

  ionViewDidLoad() {
    this.dataProvider.load();
  }

}
