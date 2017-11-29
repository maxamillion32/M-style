var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyEmployees } from './my-employees';
var MyEmployeesModule = (function () {
    function MyEmployeesModule() {
    }
    return MyEmployeesModule;
}());
MyEmployeesModule = __decorate([
    NgModule({
        declarations: [
            MyEmployees,
        ],
        imports: [
            IonicPageModule.forChild(MyEmployees),
        ],
        exports: [
            MyEmployees
        ]
    })
], MyEmployeesModule);
export { MyEmployeesModule };
//# sourceMappingURL=my-employees.module.js.map