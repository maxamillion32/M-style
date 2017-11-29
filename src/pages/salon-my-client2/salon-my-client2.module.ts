import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonMyClient2 } from './salon-my-client2';

@NgModule({
  declarations: [
    SalonMyClient2,
  ],
  imports: [
    IonicPageModule.forChild(SalonMyClient2),
  ],
  exports: [
    SalonMyClient2
  ]
})
export class SalonMyClient2Module {}
