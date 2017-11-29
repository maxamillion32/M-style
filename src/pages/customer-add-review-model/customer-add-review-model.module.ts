import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerAddReviewModel } from './customer-add-review-model';


@NgModule({
  declarations: [
    CustomerAddReviewModel,
  ],
  imports: [
  
    IonicPageModule.forChild(CustomerAddReviewModel),
  ],
  exports: [
    CustomerAddReviewModel
  ]
})
export class CustomerAddReviewModelModule {}
