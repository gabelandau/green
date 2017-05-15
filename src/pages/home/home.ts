import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  budgetsTotal: any[];

  constructor(public navCtrl: NavController, public dataProvider: Data, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.dataProvider.load();
  }

}
