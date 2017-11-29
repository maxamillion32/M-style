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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the Customersalondetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Customersalondetail = (function () {
    function Customersalondetail(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.segment = "service";
        this.salonimg = this.navParams.get('salonimg');
        //alert("hello Salon img"+JSON.stringify(this.salonimg))
    }
    Customersalondetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Customersalondetail');
    };
    Customersalondetail.prototype.call = function () {
        this.callNumber.callNumber("18001010101", true)
            .then(function () {
            return console.log('Launched dialer!');
        })
            .catch(function () {
            return console.log('Error launching dialer');
        });
    };
    Customersalondetail.prototype.Gallery = function () {
        this.navCtrl.push('CustomerSalonGallery');
    };
    Customersalondetail.prototype.list = function () {
        this.navCtrl.push('CustomerEmployeeListing');
    };
    return Customersalondetail;
}());
Customersalondetail = __decorate([
    IonicPage(),
    Component({
        selector: 'page-customersalondetail',
        templateUrl: 'customersalondetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, CallNumber])
], Customersalondetail);
export { Customersalondetail };
//# sourceMappingURL=customersalondetail.js.map