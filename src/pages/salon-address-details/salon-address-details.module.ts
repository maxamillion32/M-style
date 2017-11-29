import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAddressDetails } from './salon-address-details';

@NgModule({
  declarations: [
    SalonAddressDetails,
  ],
  imports: [
    IonicPageModule.forChild(SalonAddressDetails),
  ],
  exports: [
    SalonAddressDetails
  ]
})
export class SalonAddressDetailsModule {}
