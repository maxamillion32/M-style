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
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataService } from "../../providers/data-service";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
/**
 * Generated class for the SalonBuisnessInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonBuisnessInfo = (function () {
    function SalonBuisnessInfo(navCtrl, dataservice, navParams, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dataservice = dataservice;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.v = false;
        this.schedule_array = [];
        this.id = localStorage['salonid'];
    }
    SalonBuisnessInfo.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonBuisnessInfo');
    };
    SalonBuisnessInfo.prototype.editprofile = function () {
        this.v = !this.v;
    };
    SalonBuisnessInfo.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Loading...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.viewbusinessinfo(_this.id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.minedata = data;
                _this.mysalon_name = _this.minedata.saloninfo.salon_name;
                _this.myaddress = _this.minedata.saloninfo.address;
                _this.mydescription = _this.minedata.saloninfo.salon_description;
                _this.mycontact_number = _this.minedata.saloninfo.contact_number;
                _this.website = _this.minedata.saloninfo.website;
                _this.schedule_value = _this.minedata.saloninfo.schedule;
                _this.parking_value = _this.minedata.saloninfo.parking;
                _this.fb = _this.minedata.saloninfo.facebooklink;
                _this.insta = _this.minedata.saloninfo.instagramlink;
                _this.wheelchair_value = _this.minedata.saloninfo.wheelchair;
                _this.wifi = _this.minedata.saloninfo.wifi;
                alert('wifi ke value' + _this.wifi);
                alert('insta ke value' + _this.insta);
                // console.log('hi'+this.mydata.saloninfo.salon_name)
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonBuisnessInfo.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Loading..' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.postbusinessinfo(_this.mysalon_name, _this.myaddress, _this.mydescription, _this.mycontact_number, _this.website, _this.parking_value, _this.schedule_value, _this.id, _this.fb, _this.insta, _this.wheelchair_value, _this.wifi); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.leads = data;
                _this.leads.message == "your profile updated successfully";
                var alert = _this.alertCtrl.create({
                    title: 'PROFILE UPDATED SUCCESFULLY',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonBuisnessInfo.prototype.schedule_page = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SalonSchedule');
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.ourdata = data;
            _this.mon = _this.ourdata.mon;
            _this.tue = _this.ourdata.tue;
            _this.wed = _this.ourdata.wed;
            _this.thurs = _this.ourdata.thur;
            _this.fri = _this.ourdata.fri;
            _this.sat = _this.ourdata.sat;
            _this.sun = _this.ourdata.sun;
            if (_this.ourdata.mon == undefined) {
                _this.ourdata.mon = " ";
            }
            if (_this.ourdata.tue == undefined) {
                _this.ourdata.tue = " ";
            }
            if (_this.ourdata.wed == undefined) {
                _this.ourdata.wed = " ";
            }
            if (_this.ourdata.thurs == undefined) {
                _this.ourdata.thurs = " ";
            }
            if (_this.ourdata.fri == undefined) {
                _this.ourdata.fri = " ";
            }
            if (_this.ourdata.sat == undefined) {
                _this.ourdata.sat = " ";
            }
            if (_this.ourdata.sun == undefined) {
                _this.ourdata.sun = " ";
            }
            _this.schedule_value = _this.mon + _this.tue + _this.wed + _this.thurs + _this.fri + _this.sat + _this.sun;
            // alert(this.schedule_value) 
            //           alert(JSON.stringify(this.ourdata))
            _this.schedule_array.push(_this.ourdata.mon);
            _this.schedule_array.push(_this.ourdata.tue);
            _this.schedule_array.push(_this.ourdata.wed);
            _this.schedule_array.push(_this.ourdata.thu);
            _this.schedule_array.push(_this.ourdata.fri);
            _this.schedule_array.push(_this.ourdata.sat);
            _this.schedule_array.push(_this.ourdata.sun);
            console.log(JSON.stringify(_this.schedule_array));
        });
    };
    return SalonBuisnessInfo;
}());
SalonBuisnessInfo = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-buisness-info',
        templateUrl: 'salon-buisness-info.html',
    }),
    __metadata("design:paramtypes", [NavController, DataService,
        NavParams, AlertController,
        LoadingController, ModalController])
], SalonBuisnessInfo);
export { SalonBuisnessInfo };
//# sourceMappingURL=salon-buisness-info.js.map