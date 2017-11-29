import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeAppointments } from './employee-appointments';

@NgModule({
  declarations: [
    EmployeeAppointments,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeAppointments),
  ],
  exports: [
    EmployeeAppointments
  ]
})
export class EmployeeAppointmentsModule {}
