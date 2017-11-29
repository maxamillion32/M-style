import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeClient } from './employee-client';

@NgModule({
  declarations: [
    EmployeeClient,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeClient),
  ],
  exports: [
    EmployeeClient
  ]
})
export class EmployeeClientModule {}
