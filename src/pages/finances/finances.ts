import { Component } from '@angular/core';
import { BudgetPage } from '../budget/budget';
import { ExpensesPage } from '../expenses/expenses';
import { AccountsPage } from '../accounts/accounts'

@Component({
  selector: 'page-finances',
  templateUrl: 'finances.html'
})
export class FinancesPage {

  budgetRoot = BudgetPage;
  expensesRoot = ExpensesPage;
  accountsRoot = AccountsPage;

  constructor() {

  }

}
