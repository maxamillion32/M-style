import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerWithoutPaymentPage } from './customer-without-payment';

@NgModule({
  declarations: [
    CustomerWithoutPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerWithoutPaymentPage),
  ],
  exports: [
    CustomerWithoutPaymentPage
  ]
})
export class CustomerWithoutPaymentPageModule {}
