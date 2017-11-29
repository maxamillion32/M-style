import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Saloncancelbookings } from './saloncancelbookings';

@NgModule({
  declarations: [
    Saloncancelbookings,
  ],
  imports: [
    IonicPageModule.forChild(Saloncancelbookings),
  ],
  exports: [
    Saloncancelbookings
  ]
})
export class SaloncancelbookingsModule {}
