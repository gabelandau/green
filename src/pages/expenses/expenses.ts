import { Component } from '@angular/core';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  constructor(public dataProvider: Data) {

  }

  ionViewDidLoad() {
    this.dataProvider.load();
  }

}
