import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovetypesProvider } from '../../providers/movetypes/movetypes';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  type:any;
  data:Array<any>;
  constructor(public provider:MovetypesProvider,public navCtrl: NavController, public navParams: NavParams) {
    
 
    this.provider.getMovesType().subscribe((data)=>{
      this.data=data;
    
     //alert("adsfsdf"+JSON.stringify(this.data));
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }


  planMove(item)
  {
    this.navCtrl.push('PickupaddressPage',item);

  }
}
