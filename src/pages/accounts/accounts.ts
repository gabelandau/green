import { Component } from '@angular/core';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  constructor(public dataProvider: Data) {

  }

  ionViewDidLoad() {
      this.dataProvider.load();
  }

}
