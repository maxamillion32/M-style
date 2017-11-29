import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailPage } from './appointment-detail-page';

@NgModule({
  declarations: [
    AppointmentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailPage),
  ],
  exports: [
    AppointmentDetailPage
  ]
})
export class AppointmentDetailPageModule {}
