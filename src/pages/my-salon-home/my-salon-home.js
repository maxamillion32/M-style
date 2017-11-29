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
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { DataService } from "../../providers/data-service";
import { LoadingController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Events } from 'ionic-angular';
/**
 * Generated class for the MySalonHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MySalonHome = (function () {
    function MySalonHome(navCtrl, navParams, loadingCtrl, dataservice, events, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataservice = dataservice;
        this.events = events;
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
        events.subscribe('user:created', function (user, authinfo, username, userpic) {
            _this.userprofilepic = userpic;
            alert("salonhome" + _this.userprofilepic);
            // if(this.userprofilepic=='null'){
            //  // alert("pic ni h")
            //     this.userprofilepic='false';
            // }
        });
    }
    MySalonHome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MySalonHome');
    };
    MySalonHome.prototype.myapointments = function () {
        this.navCtrl.push('SalonAppointment');
    };
    MySalonHome.prototype.onlinebooking = function () {
        this.navCtrl.push('SalonOnlineBooking');
    };
    MySalonHome.prototype.businessinfo = function () {
        this.navCtrl.push('SalonBuisnessInfo');
    };
    MySalonHome.prototype.myservicelist = function () {
        this.navCtrl.push('SalonServiceList');
    };
    MySalonHome.prototype.notification = function () {
        this.navCtrl.push('SalonNotification', { notfication_all_data: this.minedata });
    };
    MySalonHome.prototype.addemploye = function () {
        this.navCtrl.push('MyEmployees');
    };
    MySalonHome.prototype.upload_myimages = function () {
        this.navCtrl.push('MySalonImageUpload');
    };
    MySalonHome.prototype.subscription_plans = function () {
        this.navCtrl.push('MySalonSubscrptionPage1');
    };
    MySalonHome.prototype.paymentstatus = function () {
        this.navCtrl.push('SalonPaymentPage');
    };
    MySalonHome.prototype.myclients = function () {
        this.navCtrl.push('SalonMyClient2');
    };
    MySalonHome.prototype.mylocation = function () {
        this.navCtrl.push('UserCurrentLocation');
    };
    MySalonHome.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Loading...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.MySalonNotification(); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.minedata = data;
                _this.notification_count = _this.minedata.bookingcount;
                console.log(JSON.stringify(_this.minedata));
                // this.myimage=this.minedata.saloninfo.profile_image
                // this.events.publish('user:created', (user, this.myimage));
                // console.log('hi'+this.mydata.saloninfo.salon_name)
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    return MySalonHome;
}());
MySalonHome = __decorate([
    IonicPage(),
    Component({
        selector: 'page-my-salon-home',
        templateUrl: 'my-salon-home.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LoadingController, DataService, Events, MenuController])
], MySalonHome);
export { MySalonHome };
//# sourceMappingURL=my-salon-home.js.map