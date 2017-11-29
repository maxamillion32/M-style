import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerBookings } from './customer-bookings';

@NgModule({
  declarations: [
    CustomerBookings,
  ],
  imports: [
    IonicPageModule.forChild(CustomerBookings),
  ],
  exports: [
    CustomerBookings
  ]
})
export class CustomerBookingsModule {}
