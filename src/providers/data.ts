import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  budgets: any[];
  budgetsTotal: any[];
  expenses: any[];
  accounts: any[];

  constructor() {

  }

  load() {
    this.budgets = [
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
    ];

    this.budgetsTotal = [
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

    this.expenses = [
      {
        name: "McDonalds",
        date: "4/22",
        amount: 11.52
      },
      {
        name: "Best Buy",
        date: "4/22",
        amount: 24.27
      },
      {
        name: "Target",
        date: "4/21",
        amount: 73.32
      }
    ];

    this.accounts = [
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
  }

}
