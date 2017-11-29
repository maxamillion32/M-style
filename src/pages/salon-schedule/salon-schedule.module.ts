import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonSchedule } from './salon-schedule';

@NgModule({
  declarations: [
    SalonSchedule,
  ],
  imports: [
    IonicPageModule.forChild(SalonSchedule),
  ],
  exports: [
    SalonSchedule
  ]
})
export class SalonScheduleModule {}
