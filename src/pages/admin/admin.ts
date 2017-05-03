import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddBudgetFormModal } from './add-budget-form/add-budget-form';
import { AddExpenseFormModal } from './add-expense-form/add-expense-form';
import { AddAccountFormModal } from './add-account-form/add-account-form';

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

  addExpense() {
    let myModal = this.modalCtrl.create(AddExpenseFormModal);
    myModal.present();
  }

  addAccount() {
    let myModal = this.modalCtrl.create(AddAccountFormModal);
    myModal.present();
  }
}
