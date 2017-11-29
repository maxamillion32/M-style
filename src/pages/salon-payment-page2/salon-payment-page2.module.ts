import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPaymentPage2 } from './salon-payment-page2';

@NgModule({
  declarations: [
    SalonPaymentPage2,
  ],
  imports: [
    IonicPageModule.forChild(SalonPaymentPage2),
  ],
  exports: [
    SalonPaymentPage2
  ]
})
export class SalonPaymentPage2Module {}
