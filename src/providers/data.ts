import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  budgets: any[];
  expenses: any[];
  accounts: any[];

  constructor(public storage: Storage) {

  }

  load() {
    this.storage.get('budgets').then((val) => {
      this.budgets = val;
    });

    this.storage.get('expenses').then((val) => {
      this.expenses = val;
    });

    this.storage.get('accounts').then((val) => {
      this.accounts = val;
    });
  }

  addNewBudget(name, amount, type) {
    this.budgets.push({
      "name": name,
      "amount": amount,
      "type": type
    });

    this.storage.set('budgets', this.budgets).then((val) => {
      console.log("It worked?");
    });
  }

  addNewExpense(name: string, date: string, amount: number, budget: string, account: string) {
    this.expenses.push({
      "name": name,
      "date": date,
      "amount": amount,
      "budget": budget,
      "account": account
    });

    this.storage.set('expenses', this.expenses).then((val) => {
      console.log("It worked x2");
    });

    let tempBudgets: any[];

    this.storage.get('budgets').then((val) => {
      tempBudgets = val;

      for(let item of tempBudgets) {
        if (item.name == budget) {
          item.amount = item.amount - amount;
        }
      }

      this.storage.set('budgets', tempBudgets).then((val) => {});
    });

    let tempAccounts: any[];

    this.storage.get('accounts').then((val) => {
      tempAccounts = val;

      for(let item of tempAccounts) {
        if (item.name == account) {
          item.balance = item.balance - amount;
        }
      }

      this.storage.set('accounts', tempAccounts).then((val) => {});
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
