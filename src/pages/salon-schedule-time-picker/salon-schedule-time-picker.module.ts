import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonScheduleTimePicker } from './salon-schedule-time-picker';

@NgModule({
  declarations: [
    SalonScheduleTimePicker,
  ],
  imports: [
    IonicPageModule.forChild(SalonScheduleTimePicker),
  ],
  exports: [
    SalonScheduleTimePicker
  ]
})
export class SalonScheduleTimePickerModule {}
