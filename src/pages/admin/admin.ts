import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { ModalController } from 'ionic-angular';
import { AddBudgetFormModal } from './add-budget-form/add-budget-form';
import { AddExpenseFormModal } from './add-expense-form/add-expense-form';
import { AddAccountFormModal } from './add-account-form/add-account-form';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public storage: Storage, public modalCtrl: ModalController) {

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

  setDefaultData() {
    this.storage.ready().then(() => {
      let budgetsTotal = [
        {
          name: "Variable",
          data: [
            {
              name: "Shopping",
              amount: 21.52
            },
            {
              name: "Entertainment",
              amount: -4.21
            },
            {
              name: "Transportation",
              amount: 82.62
            }
          ]
        },
        {
          name: "Fixed",
          data: [
            {
              name: "Rent",
              amount: 200
            },
            {
              name: "Utilities",
              amount: 42.25
            }
          ]
        }
      ];

      let expenses = [
        {
          name: "McDonalds",
          date: "04/22/2017",
          amount: 11.52,
          budget: "Shopping"
        },
        {
          name: "Best Buy",
          date: "04/22/2017",
          amount: 24.27,
          budget: "Entertainment"
        },
        {
          name: "Target",
          date: "04/21/2017",
          amount: 73.32,
          budget: "Shopping"
        }
      ];

      let accounts = [
        {
          name: "Checking",
          balance: 421.95
        },
        {
          name: "Savings",
          balance: 1052.23
        },
        {
          name: "Credit Card",
          balance: -24.92
        }
      ];

      this.storage.set('budgetsTotal', budgetsTotal).then((val) => {
        console.log(val);
      });
      this.storage.set('accounts', accounts).then((val) => {
        console.log(val);
      });
      this.storage.set('expenses', expenses).then((val) => {
        console.log(val);
      });
    });
  }
}
