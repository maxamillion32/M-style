import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeZone } from './time-zone';

@NgModule({
  declarations: [
    TimeZone,
  ],
  imports: [
    IonicPageModule.forChild(TimeZone),
  ],
  exports: [
    TimeZone
  ]
})
export class TimeZoneModule {}
