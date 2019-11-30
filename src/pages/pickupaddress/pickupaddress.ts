import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustommodalProvider } from '../../providers/custommodal/custommodal';
/**
 * Generated class for the PickupaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pickupaddress',
  templateUrl: 'pickupaddress.html',
})
export class PickupaddressPage {

  constructor(public customModal:CustommodalProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupaddressPage');
  }

  addPickUpAddress()
  {
    this.customModal.presentPickUpAddressModal().present();
  }
}
