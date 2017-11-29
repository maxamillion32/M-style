import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Customersalondetail } from './customersalondetail';

@NgModule({
  declarations: [
    Customersalondetail,
  ],
  imports: [
    IonicPageModule.forChild(Customersalondetail),
  ],
  exports: [
    Customersalondetail
  ]
})
export class CustomersalondetailModule {}
