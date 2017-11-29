import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerEmployeeListing } from './customer-employee-listing';

@NgModule({
  declarations: [
    CustomerEmployeeListing,
  ],
  imports: [
    IonicPageModule.forChild(CustomerEmployeeListing),
  ],
  exports: [
    CustomerEmployeeListing
  ]
})
export class CustomerEmployeeListingModule {}
