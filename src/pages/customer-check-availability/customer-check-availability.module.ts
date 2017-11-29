import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerCheckAvailability } from './customer-check-availability';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    CustomerCheckAvailability,
  ],
  imports: [
   NgCalendarModule,
    IonicPageModule.forChild(CustomerCheckAvailability),
  ],
  exports: [
    CustomerCheckAvailability
  ]
})
export class CustomerCheckAvailabilityModule {}
