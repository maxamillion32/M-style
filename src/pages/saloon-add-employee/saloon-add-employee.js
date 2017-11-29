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
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { DataService } from "../../providers/data-service";
import { Observable } from "rxjs/Rx";
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the SaloonAddEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SaloonAddEmployee = (function () {
    function SaloonAddEmployee(navCtrl, navParams, dataservice, loadingCtrl, alertCtrl, camera, transfer, file, formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataservice = dataservice;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        // alert("hello id"+localStorage['salonid'])
        this.salonid = localStorage['salonid'];
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.form3 = formBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('emailRegex'), Validators.required])],
            phone_number: ['', Validators.compose([Validators.maxLength(25), Validators.minLength(6), Validators.pattern('0-9'), Validators.required])],
            selected_service: ['', Validators.required],
        });
    }
    SaloonAddEmployee.prototype.save = function () {
        this.viewCtrl.dismiss({ myname: this.form3.controls["name"].value, myemail: this.form3.controls["email"].value, my_number: this.form3.controls["phone_number"].value, my_salonid: this.salonid, my_service: this.form3.controls["selected_service"].value });
        // if(this.leads.status==1){
        //   this.viewCtrl.dismiss({myname:this.name,myservice:this.selected_service})
        //   alert(this.name)
        //   alert(this.selected_service)
        // }
    };
    SaloonAddEmployee.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SaloonAddEmployee.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Loading...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.dataservice.getmyservicedata(_this.salon_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                if (data.message == " Something Wrong") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Oops',
                        subTitle: 'Seems like your list is empty',
                        buttons: ['Dismiss']
                    });
                    alert_1.present();
                }
                else {
                    _this.mydata = data;
                    _this.printdata = _this.mydata.data;
                    console.log('plz' + _this.name);
                    if (_this.mydata.message == "data saved successfully") {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Service Added Sucesfully',
                            buttons: ['Dismiss']
                        });
                        alert_2.present();
                    }
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    return SaloonAddEmployee;
}());
SaloonAddEmployee = __decorate([
    IonicPage(),
    Component({
        selector: 'page-saloon-add-employee',
        templateUrl: 'saloon-add-employee.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        DataService,
        LoadingController,
        AlertController,
        Camera,
        FileTransfer,
        File,
        FormBuilder,
        ViewController])
], SaloonAddEmployee);
export { SaloonAddEmployee };
//# sourceMappingURL=saloon-add-employee.js.map