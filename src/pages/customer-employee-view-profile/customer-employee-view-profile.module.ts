import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerEmployeeViewProfile } from './customer-employee-view-profile';

@NgModule({
  declarations: [
    CustomerEmployeeViewProfile,
  ],
  imports: [
    IonicPageModule.forChild(CustomerEmployeeViewProfile),
  ],
  exports: [
    CustomerEmployeeViewProfile
  ]
})
export class CustomerEmployeeViewProfileModule {}
