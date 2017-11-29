import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAutocompleteItems } from './modal-autocomplete-items';

@NgModule({
  declarations: [
    ModalAutocompleteItems,
  ],
  imports: [
    IonicPageModule.forChild(ModalAutocompleteItems),
  ],
  exports: [
    ModalAutocompleteItems
  ]
})
export class ModalAutocompleteItemsModule {}
