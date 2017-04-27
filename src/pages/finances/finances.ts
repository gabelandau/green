import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BudgetPage } from '../budget/budget';
import { ExpensesPage } from "../expenses/expenses";

@Component({
  selector: 'page-finances',
  templateUrl: 'finances.html'
})
export class FinancesPage {

  budgetRoot = BudgetPage;
  expensesRoot = ExpensesPage;

  constructor(public navCtrl: NavController) {

  }

}
