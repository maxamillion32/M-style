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
 * Generated class for the SalonImageGallery page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonImageGallery = (function () {
    function SalonImageGallery(navCtrl, dataservice, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.dataservice = dataservice;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.images = [
            {
                image: "assets/img/weave.jpg",
            },
            {
                image: "assets/img/weave.jpg",
            },
            {
                image: "assets/img/weave.jpg",
            },
        ];
    }
    SalonImageGallery.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonImageGallery');
    };
    SalonImageGallery.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Loading' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.viewprofileinfo(_this.user_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.minedata = data;
                _this.image = _this.minedata.saloninfo.salon_image;
                alert(JSON.stringify(_this.image));
                // console.log('hi'+this.mydata.saloninfo.salon_name)
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    return SalonImageGallery;
}());
SalonImageGallery = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-image-gallery',
        templateUrl: 'salon-image-gallery.html',
    }),
    __metadata("design:paramtypes", [NavController, DataService,
        NavParams, AlertController,
        LoadingController])
], SalonImageGallery);
export { SalonImageGallery };
//# sourceMappingURL=salon-image-gallery.js.map