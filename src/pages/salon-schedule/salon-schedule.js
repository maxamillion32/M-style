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
 * Generated class for the SalonSchedule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonSchedule = (function () {
    function SalonSchedule(navCtrl, navParams, viewctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewctrl = viewctrl;
        this.time1 = [
            { time: "10 am", value: 1 },
            { time: "10:30 am", value: 2 },
            { time: "11 am", value: 3 },
            { time: "11:30 am", value: 4 },
            { time: "12:00 pm", value: 5 },
            { time: "12:30 pm", value: 6 },
            { time: "1:00 pm", value: 7 },
            { time: "1:30 pm", value: 8 },
            { time: "2:00 pm", value: 9 },
            { time: "2:30 pm", value: 10 },
            { time: "3:00 pm", value: 11 },
            { time: "3:30 pm", value: 12 },
            { time: "4:00 pm", value: 13 },
            { time: "4:30 pm", value: 14 },
            { time: "5:00 pm", value: 15 },
            { time: "5:30 pm", value: 16 },
            { time: "6:00 pm", value: 17 },
            { time: "6:30 pm", value: 18 },
            { time: "7:00 pm", value: 19 },
            { time: "7:30 pm", value: 20 },
            { time: "8:00 pm", value: 21 },
            { time: "8:30 pm", value: 22 },
            { time: "9:00 pm", value: 23 },
            { time: "9:30 pm", value: 24 },
            { time: "10:00 pm", value: 25 },
            { time: "10:30 pm", value: 26 },
            { time: "11:00 pm", value: 27 },
            { time: "11:30 pm", value: 28 },
        ];
        this.time2 = [
            { time: "10:30 am", value: 1 },
            { time: "11 am", value: 2 },
            { time: "11:30 am", value: 3 },
            { time: "12 pm", value: 4 },
            { time: "12:30 pm", value: 5 },
            { time: "1:00 pm", value: 6 },
            { time: "1:30 pm", value: 7 },
            { time: "2:00 pm", value: 8 },
            { time: "2:30 pm", value: 9 },
            { time: "3:00 pm", value: 10 },
            { time: "3:30 pm", value: 11 },
            { time: "4:00 pm", value: 12 },
            { time: "4:30 pm", value: 13 },
            { time: "5:00 pm", value: 14 },
            { time: "5:30 pm", value: 15 },
            { time: "6:00 pm", value: 16 },
            { time: "6:30 pm", value: 17 },
            { time: "7:00 pm", value: 18 },
            { time: "7:30 pm", value: 19 },
            { time: "8:00 pm", value: 20 },
            { time: "8:30 pm", value: 21 },
            { time: "9:00 pm", value: 22 },
            { time: "9:30 pm", value: 23 },
            { time: "10:00 pm", value: 24 },
            { time: "10:30 pm", value: 25 },
            { time: "11:00 pm", value: 26 },
            { time: "11:30 pm", value: 27 },
        ];
    }
    SalonSchedule.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonSchedule');
    };
    SalonSchedule.prototype.cancel = function () {
        this.viewctrl.dismiss();
    };
    SalonSchedule.prototype.submit = function () {
        this.viewctrl.dismiss({ mon: this.monday_value, tue: this.tuesday_value, wed: this.wednesday_value,
            thu: this.thursday_value,
            fri: this.friday_value,
            sat: this.saturday_value,
            sun: this.sunday_value
        });
    };
    return SalonSchedule;
}());
SalonSchedule = __decorate([
    IonicPage(),
    Component({
        selector: 'page-salon-schedule',
        templateUrl: 'salon-schedule.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController])
], SalonSchedule);
export { SalonSchedule };
//# sourceMappingURL=salon-schedule.js.map