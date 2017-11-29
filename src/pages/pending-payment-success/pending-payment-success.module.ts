import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingPaymentSuccessPage } from './pending-payment-success';

@NgModule({
  declarations: [
    PendingPaymentSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingPaymentSuccessPage),
  ],
  exports: [
    PendingPaymentSuccessPage
  ]
})
export class PendingPaymentSuccessPageModule {}
