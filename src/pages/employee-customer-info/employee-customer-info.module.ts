import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeCustomerInfo } from './employee-customer-info';

@NgModule({
  declarations: [
    EmployeeCustomerInfo,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeCustomerInfo),
  ],
  exports: [
    EmployeeCustomerInfo
  ]
})
export class EmployeeCustomerInfoModule {}
