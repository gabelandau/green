import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddBudgetFormModal } from '../admin/add-budget-form/add-budget-form'

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public modalCtrl: ModalController, public dataProvider: Data) {

  }

  ionViewDidLoad() {
      this.dataProvider.load();
  }

  showAddBudget() {
      let myModal = this.modalCtrl.create(AddBudgetFormModal);
      myModal.present();
  }
}
