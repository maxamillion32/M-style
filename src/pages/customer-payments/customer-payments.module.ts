import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPayments } from './customer-payments';

@NgModule({
  declarations: [
    CustomerPayments,
  ],
  imports: [
    IonicPageModule.forChild(CustomerPayments),
  ],
  exports: [
    CustomerPayments
  ]
})
export class CustomerPaymentsModule {}
