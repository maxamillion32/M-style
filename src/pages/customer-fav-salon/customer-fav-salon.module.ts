import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerFavSalon } from './customer-fav-salon';

@NgModule({
  declarations: [
    CustomerFavSalon,
  ],
  imports: [
    IonicPageModule.forChild(CustomerFavSalon),
  ],
  exports: [
    CustomerFavSalon
  ]
})
export class CustomerFavSalonModule {}
