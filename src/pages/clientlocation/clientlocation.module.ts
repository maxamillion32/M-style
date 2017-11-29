import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Clientlocation } from './clientlocation';

@NgModule({
  declarations: [
    Clientlocation,
  ],
  imports: [
    IonicPageModule.forChild(Clientlocation),
  ],
  exports: [
    Clientlocation
  ]
})
export class ClientlocationModule {}
