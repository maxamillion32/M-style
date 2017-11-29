import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificEmployee2Page } from './specific-employee2';

@NgModule({
  declarations: [
    SpecificEmployee2Page,
  ],
  imports: [
    IonicPageModule.forChild(SpecificEmployee2Page),
  ],
  exports: [
    SpecificEmployee2Page
  ]
})
export class SpecificEmployee2PageModule {}
