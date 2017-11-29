import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonBuisnessInfo } from './salon-buisness-info';

@NgModule({
  declarations: [
    SalonBuisnessInfo,
  ],
  imports: [
    IonicPageModule.forChild(SalonBuisnessInfo),
  ],
  exports: [
    SalonBuisnessInfo
  ]
})
export class SalonBuisnessInfoModule {}
