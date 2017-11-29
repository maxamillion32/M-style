import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeNotice } from './time-notice';

@NgModule({
  declarations: [
    TimeNotice,
  ],
  imports: [
    IonicPageModule.forChild(TimeNotice),
  ],
  exports: [
    TimeNotice
  ]
})
export class TimeNoticeModule {}
