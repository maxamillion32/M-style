import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerNotification } from './customer-notification';

@NgModule({
  declarations: [
    CustomerNotification,
  ],
  imports: [
    IonicPageModule.forChild(CustomerNotification),
  ],
  exports: [
    CustomerNotification
  ]
})
export class CustomerNotificationModule {}
