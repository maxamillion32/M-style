var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonOwnerProfile2 } from './salon-owner-profile2';
var SalonOwnerProfile2Module = (function () {
    function SalonOwnerProfile2Module() {
    }
    return SalonOwnerProfile2Module;
}());
SalonOwnerProfile2Module = __decorate([
    NgModule({
        declarations: [
            SalonOwnerProfile2,
        ],
        imports: [
            IonicPageModule.forChild(SalonOwnerProfile2),
        ],
        exports: [
            SalonOwnerProfile2
        ]
    })
], SalonOwnerProfile2Module);
export { SalonOwnerProfile2Module };
//# sourceMappingURL=salon-owner-profile2.module.js.map