import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerCategories } from './customer-categories';

@NgModule({
  declarations: [
    CustomerCategories,
  ],
  imports: [
    IonicPageModule.forChild(CustomerCategories),
  ],
  exports: [
    CustomerCategories
  ]
})
export class CustomerCategoriesModule {}
