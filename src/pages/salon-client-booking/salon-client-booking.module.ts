import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonClientBooking } from './salon-client-booking';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    SalonClientBooking,
  ],
  imports: [
   NgCalendarModule,
    IonicPageModule.forChild(SalonClientBooking),
  ],
  exports: [
    SalonClientBooking
  ]
})
export class SalonClientBookingModule {}
