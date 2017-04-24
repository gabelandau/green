import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BudgetPage } from '../budget/budget';

@Component({
  selector: 'page-finances',
  templateUrl: 'finances.html'
})
export class FinancesPage {

  budgetRoot = BudgetPage;

  constructor(public navCtrl: NavController) {

  }

}