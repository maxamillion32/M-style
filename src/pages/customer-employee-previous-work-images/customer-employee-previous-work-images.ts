import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
/**
 * Generated class for the CustomerEmployeePreviousWorkImages page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-employee-previous-work-images',
  templateUrl: 'customer-employee-previous-work-images.html',
})
export class CustomerEmployeePreviousWorkImages {
   images;
   viewimage
   http;
   uploadpics;
   employeeid;
   abc:boolean;
  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController,
    public navParams: NavParams,http:Http,public alertCtrl:AlertController) {

     this.employeeid=this.navParams.get('employeeid')
       this.http=http;

       this.abc=false;
  }

 ngOnInit(){
  
let loader = this.loadingCtrl.create({
content: "Please wait..."
});
loader.present();
var link = 'http://gagandeepsethi.com/salonDirectory/WebServices/employeePreviousWorkImageShow.json';
var data = JSON.stringify({
employee_id: this.employeeid
});
this.http.post(link, data)
.map(response => response.json())
.subscribe(data => {
loader.dismiss();
this.viewimage = data;
console.log(JSON.stringify(this.viewimage))
     this.uploadpics=this.viewimage.image;

     if(this.viewimage.status==0){

       this.abc=true;
     }

error => {
   let alert=this.alertCtrl.create({
              title:'SERVER ERROR',
             subTitle:'Please Try Again',
             buttons:['Ok']
              })         
           alert.present()
}   
});
} 

 }
