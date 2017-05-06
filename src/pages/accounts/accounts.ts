import { Component } from '@angular/core';
import { Data } from '../../providers/data';
import { AddAccountFormModal } from '../admin/add-account-form/add-account-form';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  constructor(public dataProvider: Data, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
      this.dataProvider.load();
  }

  showAddAccount() {
    let myModal = this.modalCtrl.create(AddAccountFormModal);
    myModal.present();
  }

}
