import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonNotification } from './salon-notification';

@NgModule({
  declarations: [
    SalonNotification,
  ],
  imports: [
    IonicPageModule.forChild(SalonNotification),
  ],
  exports: [
    SalonNotification
  ]
})
export class SalonNotificationModule {}
