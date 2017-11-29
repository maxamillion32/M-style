import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerRegistration } from './customer-registration';

@NgModule({
  declarations: [
    CustomerRegistration,
  ],
  imports: [
    IonicPageModule.forChild(CustomerRegistration),
  ],
  exports: [
    CustomerRegistration
  ]
})
export class CustomerRegistrationModule {}
