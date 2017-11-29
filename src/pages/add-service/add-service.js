var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the AddService page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddService = (function () {
    function AddService(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AddService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddService');
    };
    AddService.prototype.submit = function () {
        this.viewCtrl.dismiss({ a: this.name, b: this.cost, c: this.time, d: this.description });
        console.log('service' + this.name);
    };
    AddService.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return AddService;
}());
AddService = __decorate([
    IonicPage(),
    Component({
        selector: 'page-add-service',
        templateUrl: 'add-service.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController])
], AddService);
export { AddService };
//# sourceMappingURL=add-service.js.map