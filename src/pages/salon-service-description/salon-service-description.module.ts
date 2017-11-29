import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonServiceDescription } from './salon-service-description';

@NgModule({
  declarations: [
    SalonServiceDescription,
  ],
  imports: [
    IonicPageModule.forChild(SalonServiceDescription),
  ],
  exports: [
    SalonServiceDescription
  ]
})
export class SalonServiceDescriptionModule {}
