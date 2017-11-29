import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonMyClient3 } from './salon-my-client3';

@NgModule({
  declarations: [
    SalonMyClient3,
  ],
  imports: [
    IonicPageModule.forChild(SalonMyClient3),
  ],
  exports: [
    SalonMyClient3
  ]
})
export class SalonMyClient3Module {}
