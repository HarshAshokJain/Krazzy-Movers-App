import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the KrazzytabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-krazzytabs',
  templateUrl: 'krazzytabs.html'
})
export class KrazzytabsPage {

  homeRoot='HomePage'
  locationRoot='LocationPage'
  notificationsRoot='NotificationsPage'
  profileRoot='ProfilePage'
  settingRoot='SettingPage'




  constructor(public navCtrl: NavController) {
    
 
  }

}
