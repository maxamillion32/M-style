import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCurrentLocation } from './user-current-location';

@NgModule({
  declarations: [
    UserCurrentLocation,
  ],
  imports: [
    IonicPageModule.forChild(UserCurrentLocation),
  ],
  exports: [
    UserCurrentLocation
  ]
})
export class UserCurrentLocationModule {}
