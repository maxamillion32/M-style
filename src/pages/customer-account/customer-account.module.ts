import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerAccount } from './customer-account';

@NgModule({
  declarations: [
    CustomerAccount,
  ],
  imports: [
    IonicPageModule.forChild(CustomerAccount),
  ],
  exports: [
    CustomerAccount
  ]
})
export class CustomerAccountModule {}
