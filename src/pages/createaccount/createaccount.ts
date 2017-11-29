import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
/**
 * Generated class for the Createaccount page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class Createaccount {

  constructor( private locationAccuracy: LocationAccuracy,
  	public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     this.request()
  }
  
Customer(){
   this.navCtrl.push('CustomerRegistration');
}
Owner(){
     this.navCtrl.push('SalonReg2')
}
request(){
this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if(canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            console.log('Request successful.')
            // alert("request Success")
          },
          error => {
            console.log('Error requesting location permissions', error)
             // alert("request fail")
            
          }
        );
      }
    });
}
}
