import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CustommodalPage } from '../../pages/custommodal/custommodal';
/*
  Generated class for the CustommodalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustommodalProvider {

  constructor(public modalCtrl: ModalController,public http: Http) {
    console.log('Hello CustommodalProvider Provider');
  }

  presentPickUpAddressModal() {
    return this.modalCtrl.create('CustommodalPage');
  
  }


}
