import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonCategory } from './salon-category';

@NgModule({
  declarations: [
    SalonCategory,
  ],
  imports: [
    IonicPageModule.forChild(SalonCategory),
  ],
  exports: [
    SalonCategory
  ]
})
export class SalonCategoryModule {}
