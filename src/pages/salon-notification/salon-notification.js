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
var v;
/**
 * Generated class for the SalonNotification page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonNotification = (function () {
    function SalonNotification(navCtrl, navParams, loadingCtrl, dataservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataservice = dataservice;
        this.flags = 1;
        this.notication_data = this.navParams.get('notfication_all_data');
        this.mynotication_data = this.notication_data.bookinginfo;
        console.log('hiiii' + JSON.stringify(this.notication_data));
        localStorage['flags'] = this.flags;
    }
    SalonNotification.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonNotification');
    };
    SalonNotification.prototype.opennotification = function (m, i) {
        var _this = this;
        alert(m.payment_id);
        var loading = this.loadingCtrl.create({ content: 'Please Wait ...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.ResetCount(m.payment_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.mydata = data;
                _this.printdata = _this.mydata.bookinginfo;
                // alert(JSON.stringify(this.printdata))
            });
        });
        localStorage['flags'] = 2;
        if (localStorage['flags'] == 2) {
            v = 'var_' + i;
            var x = document.getElementById(v);
            // alert('mukul'+x)
            // localStorage['z']=x
            // this.y =localStorage['z']
            // alert(this.y)
            localStorage['flags'] = 2;
            x.style.background = "#fff";
            this.navCtrl.push('SalonAcceptRequest', { nextpagedata: m });
        }
        else {
            //    v='var_'+i
            //     var x =document.getElementById(v);
            //     // alert('mukul'+x)
            //     // localStorage['z']=x
            //    // this.y =localStorage['z']
            //    // alert(this.y)
            // x.style.background="#fff"
            // this.navCtrl.push('SalonAcceptRequest',{nextpagedata:m})
        }
    };
    return SalonNotification;
}());
SalonNotification = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-notification',
        templateUrl: 'salon-notification.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LoadingController, DataService])
], SalonNotification);
export { SalonNotification };
//# sourceMappingURL=salon-notification.js.map