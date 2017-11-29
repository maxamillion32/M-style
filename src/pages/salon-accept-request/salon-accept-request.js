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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { DataService } from '../../providers/data-service';
/**
 * Generated class for the SalonAcceptRequest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonAcceptRequest = (function () {
    function SalonAcceptRequest(navCtrl, navParams, loadingCtrl, dataservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataservice = dataservice;
        this.notification_data = this.navParams.get('nextpagedata');
        this.mynotifydata = this.notification_data.serviceinfo;
        // this.payment_id=this.notification_data.
        // console.log(JSON.stringify(this.mynotifydata))
    }
    SalonAcceptRequest.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonAcceptRequest');
    };
    SalonAcceptRequest.prototype.accept = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please Wait ...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.AcceptBooking(10, 1); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.mydata = data;
                if (_this.mydata.message == 'success') {
                    alert('Sucesfuly Accepted');
                }
            });
        });
    };
    SalonAcceptRequest.prototype.decline = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please Wait ...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.DeclineBooking(10, 2); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.mydata = data;
                if (_this.mydata.message == 'success') {
                    alert('Sucesfuly Declined');
                }
            });
        });
    };
    return SalonAcceptRequest;
}());
SalonAcceptRequest = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-accept-request',
        templateUrl: 'salon-accept-request.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LoadingController, DataService])
], SalonAcceptRequest);
export { SalonAcceptRequest };
//# sourceMappingURL=salon-accept-request.js.map