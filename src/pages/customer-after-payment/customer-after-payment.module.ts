import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerAfterPayment } from './customer-after-payment';

@NgModule({
  declarations: [
    CustomerAfterPayment,
  ],
  imports: [
    IonicPageModule.forChild(CustomerAfterPayment),
  ],
  exports: [
    CustomerAfterPayment
  ]
})
export class CustomerAfterPaymentModule {}
