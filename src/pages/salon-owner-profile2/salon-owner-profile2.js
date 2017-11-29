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
import { DataService } from "../../providers/data-service";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
/**
 * Generated class for the SalonOwnerProfile2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonOwnerProfile2 = (function () {
    function SalonOwnerProfile2(navCtrl, dataservice, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.dataservice = dataservice;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.v = false;
    }
    SalonOwnerProfile2.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonOwnerProfile2');
    };
    SalonOwnerProfile2.prototype.editprofile = function () {
        this.v = !this.v;
    };
    SalonOwnerProfile2.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'action.processing' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.viewprofileinfo(_this.user_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.minedata = data;
                _this.name = _this.minedata.saloninfo.full_name;
                _this.email = _this.minedata.saloninfo.email;
                _this.about_me = _this.minedata.saloninfo.salon_description;
                _this.mobile_number = _this.minedata.saloninfo.contact_number;
                // console.log('hi'+this.mydata.saloninfo.salon_name)
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonOwnerProfile2.prototype.editmyprofile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'action.processing' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.editprofileinfo(_this.name, _this.about_me, _this.email, _this.mobile_number, _this.user_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.leads = data;
                _this.leads.message == "your profile updated successfully";
                var alert = _this.alertCtrl.create({
                    title: ' YOUR PROFILE UPDATED SUCCESFULLY',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    return SalonOwnerProfile2;
}());
SalonOwnerProfile2 = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-owner-profile2',
        templateUrl: 'salon-owner-profile2.html',
    }),
    __metadata("design:paramtypes", [NavController, DataService,
        NavParams, AlertController,
        LoadingController])
], SalonOwnerProfile2);
export { SalonOwnerProfile2 };
//# sourceMappingURL=salon-owner-profile2.js.map