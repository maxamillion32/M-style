import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSlots } from './time-slots';

@NgModule({
  declarations: [
    TimeSlots,
  ],
  imports: [
    IonicPageModule.forChild(TimeSlots),
  ],
  exports: [
    TimeSlots
  ]
})
export class TimeSlotsModule {}
