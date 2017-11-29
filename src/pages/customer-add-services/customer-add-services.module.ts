import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerAddServices } from './customer-add-services';

@NgModule({
  declarations: [
    CustomerAddServices,
  ],
  imports: [
    IonicPageModule.forChild(CustomerAddServices),
  ],
  exports: [
    CustomerAddServices
  ]
})
export class CustomerAddServicesModule {}
