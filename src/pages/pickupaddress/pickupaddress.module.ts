import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupaddressPage } from './pickupaddress';

@NgModule({
  declarations: [
    PickupaddressPage,
  ],
  imports: [
    IonicPageModule.forChild(PickupaddressPage),
  ],
})
export class PickupaddressPageModule {}
