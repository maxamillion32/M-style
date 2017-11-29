import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SalonCategory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-category',
  templateUrl: 'salon-category.html',
})
export class SalonCategory {
  value1

   cbArr: string[];
    cbChecked: string[];


  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  	 this.cbArr = ['BARBER', 'HAIR STYLIST', 'WEAVE AND EXTENSIONS SPECIALIST','MAKE UP ARTIST',
'NAIL MANICURE AND PEDICURE','TATOO ARTIST','MASSAGE THERAPIST','OTHER SERVICES'];
    this.cbChecked = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonCategory');
  }

updateCheckedOptions(chBox, event) {
      var cbIdx = this.cbChecked.indexOf(chBox);

      if(event.target.checked) {
          if(cbIdx < 0 ){
               this.cbChecked.push(chBox);
             console.log(chBox);
          }

      } else {
          if(cbIdx >= 0 ){
             this.cbChecked.splice(cbIdx,1);
              console.log(cbIdx);
          }

      }
  }
   updateOptions() {
   	// console.log("is"+this.cbChecked)
    this.viewctrl.dismiss({services:this.cbChecked});
  }
  /////////////////////////////

cancel(){
this.viewctrl.dismiss()

}
}



