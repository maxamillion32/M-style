import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeNotification } from './employee-notification';

@NgModule({
  declarations: [
    EmployeeNotification,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeNotification),
  ],
  exports: [
    EmployeeNotification
  ]
})
export class EmployeeNotificationModule {}
