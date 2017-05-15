import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  budgets: any[];
  budgetsTotal: any[];
  expenses: any[];
  accounts: any[];

  constructor(public storage: Storage) {

  }

  load() {
    this.storage.get('budgets').then((val) => {
      this.budgets = val;
    });

    this.storage.get('budgetsTotal').then((val) => {
      this.budgetsTotal = val;
    });

    this.storage.get('expenses').then((val) => {
      this.expenses = val;
    });

    this.storage.get('accounts').then((val) => {
      this.accounts = val;
    });
  }

  addNewBudget(name, amount, type) {
    if(type == "variable") {
      this.budgetsTotal[0].data.push({
        "name": name,
        "amount": amount
      })
    } else {
      this.budgetsTotal[1].data.push({
        "name": name,
        "amount": amount
      })
    }

    this.storage.set('budgetsTotal', this.budgetsTotal).then((val) => {
      console.log("It worked?");
    });
  }

  addNewExpense(name: string, date: string, amount: number, budget: string) {
    this.expenses.push({
      "name": name,
      "date": date,
      "amount": amount,
      "budget": budget
    });

    this.storage.set('expenses', this.expenses).then((val) => {
      console.log("It worked x2");
    });

    let tempBudgets: any[];

    this.storage.get('budgetsTotal').then((val) => {
      tempBudgets = val;

      for(let item of tempBudgets[0].data) {
        if (item.name == budget) {
          item.amount = item.amount - amount;
        }
      }

      for(let item of tempBudgets[1].data) {
        if (item.name == budget) {
          item.amount = item.amount - amount;
        }
      }

      this.storage.set('budgetsTotal', tempBudgets).then((val) => {});
    });
  }

  addNewAccount(name: String, balance: Number) {
    this.accounts.push({
      "name": name,
      "balance": balance
    });

    this.storage.set('accounts', this.accounts).then((val) => {
      console.log("It worked x3!");
    })
  }

}
