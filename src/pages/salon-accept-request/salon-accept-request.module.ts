import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAcceptRequest } from './salon-accept-request';

@NgModule({
  declarations: [
    SalonAcceptRequest,
  ],
  imports: [
    IonicPageModule.forChild(SalonAcceptRequest),
  ],
  exports: [
    SalonAcceptRequest
  ]
})
export class SalonAcceptRequestModule {}
