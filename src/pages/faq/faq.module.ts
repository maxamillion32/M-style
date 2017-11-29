import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Faq } from './faq';

@NgModule({
  declarations: [
    Faq,
  ],
  imports: [
    IonicPageModule.forChild(Faq),
  ],
  exports: [
    Faq
  ]
})
export class FaqModule {}
