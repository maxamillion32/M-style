import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerCalendarAppointmentsPage } from './customer-calendar-appointments';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    CustomerCalendarAppointmentsPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CustomerCalendarAppointmentsPage),
  ],
  exports: [
    CustomerCalendarAppointmentsPage
  ]
})
export class CustomerCalendarAppointmentsPageModule {}
