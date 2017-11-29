import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonCancelHours } from './salon-cancel-hours';

@NgModule({
  declarations: [
    SalonCancelHours,
  ],
  imports: [
    IonicPageModule.forChild(SalonCancelHours),
  ],
  exports: [
    SalonCancelHours
  ]
})
export class SalonCancelHoursModule {}
