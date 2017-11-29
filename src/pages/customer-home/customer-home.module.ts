import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerHome } from './customer-home';

@NgModule({
  declarations: [
    CustomerHome,
  ],
  imports: [
    IonicPageModule.forChild(CustomerHome),
  ],
  exports: [
    CustomerHome
  ]
})
export class CustomerHomeModule {}
