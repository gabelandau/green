import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddExpenseFormModal } from '../admin/add-expense-form/add-expense-form';
import { EditExpenseFormModal } from './edit-expense-form/edit-expense-form';

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  constructor(public dataProvider: Data, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.dataProvider.load();
  }

  showAddExpense() {
    let myModal = this.modalCtrl.create(AddExpenseFormModal);
    myModal.present();
  }

  showEditExpense(item) {
    let myModal = this.modalCtrl.create(EditExpenseFormModal, {name: item.name, date: item.date, amount: item.amount});
    myModal.present()
  }

}
