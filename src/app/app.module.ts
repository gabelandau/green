import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FinancesPage } from '../pages/finances/finances';
import { SettingsPage } from '../pages/settings/settings';
import { BudgetPage } from '../pages/budget/budget';
import { AdminPage } from '../pages/admin/admin';
import { ExpensesPage } from '../pages/expenses/expenses';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AddBudgetFormModal } from '../pages/admin/add-budget-form/add-budget-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    FinancesPage,
    BudgetPage,
    ExpensesPage,
    SettingsPage,
    AdminPage,
    HomePage,
    TabsPage,
    AddBudgetFormModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FinancesPage,
    BudgetPage,
    ExpensesPage,
    SettingsPage,
    AdminPage,
    HomePage,
    TabsPage,
    AddBudgetFormModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
