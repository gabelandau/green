import { Component } from '@angular/core';

import { FinancesPage } from '../finances/finances';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FinancesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
