import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearBySalon } from './near-by-salon';

@NgModule({
  declarations: [
    NearBySalon,
  ],
  imports: [
    IonicPageModule.forChild(NearBySalon),
  ],
  exports: [
    NearBySalon
  ]
})
export class NearBySalonModule {}
