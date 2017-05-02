import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminPage } from '../admin/admin'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  adminRoot = AdminPage;

  constructor(public navCtrl: NavController) {

  }

}
