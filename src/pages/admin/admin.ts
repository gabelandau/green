import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddBudgetFormModal } from './add-budget-form/add-budget-form';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addBudget() {
    let myModal = this.modalCtrl.create(AddBudgetFormModal);
    myModal.present();
  }

}
