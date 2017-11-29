import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonOnlineBooking } from './salon-online-booking';

@NgModule({
  declarations: [
    SalonOnlineBooking,
  ],
  imports: [
    IonicPageModule.forChild(SalonOnlineBooking),
  ],
  exports: [
    SalonOnlineBooking
  ]
})
export class SalonOnlineBookingModule {}
