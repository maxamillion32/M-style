import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonServiceList } from './salon-service-list';

@NgModule({
  declarations: [
    SalonServiceList,
  ],
  imports: [
    IonicPageModule.forChild(SalonServiceList),
  ],
  exports: [
    SalonServiceList
  ]
})
export class SalonServiceListModule {}
