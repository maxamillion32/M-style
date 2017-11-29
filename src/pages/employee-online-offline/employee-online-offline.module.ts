import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeOnlineOffline } from './employee-online-offline';

@NgModule({
  declarations: [
    EmployeeOnlineOffline,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeOnlineOffline),
  ],
  exports: [
    EmployeeOnlineOffline
  ]
})
export class EmployeeOnlineOfflineModule {}
