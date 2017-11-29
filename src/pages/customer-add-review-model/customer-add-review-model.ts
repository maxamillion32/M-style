import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,
ViewController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-customer-add-review-model',
  templateUrl: 'customer-add-review-model.html',
})
export class CustomerAddReviewModel {
  rate
  salonname
  salonid
  message
  reviewres;
  starid
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 public alertCtrl:AlertController,public viewCtrl: ViewController,
    public loadingCtrl:LoadingController ,private dataservice:DataService) {
  	 this.salonname=this.navParams.get('salonname')
      this.salonid=this.navParams.get('salonid')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAddReviewModel');
  }
onModelChange(event){

// alert(event)

}
tap(id)
{

if(id==1)
{
 
   this.starid=1
 var x1=document.getElementById('star1')
 x1.style.color="orange"
var x2=document.getElementById('star2')
 x2.style.color="grey"
  var x3=document.getElementById('star3')
 x3.style.color="grey"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"


}
else if (id==2) {

   this.starid=2
   var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="grey"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==3) {
   this.starid=3
 var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="orange"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==4) {
   this.starid=4
   var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="orange"
  
    var x4=document.getElementById('star4')
 x4.style.color="orange"
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==5) {
   this.starid=5 
    var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="orange"
 var x4=document.getElementById('star4')
 x4.style.color="orange" 
 var x5=document.getElementById('star5')
 x5.style.color="orange"

}
}
Review(){
       // alert(this.starid)
	     if(localStorage['auth']!='true'){
                let alert = this.alertCtrl.create({
                       title: 'Alert!',
                       subTitle: 'You Must Login to Add Review',
                        buttons: ['ok']
                        
                         
                  });
                  alert.present();
	     }
	// alert(this.salonid)
	 // alert(this.message)
  //    alert(this.rate)
  else {

 
      if(this.starid==undefined){
      	 let alert = this.alertCtrl.create({
                       title: 'Alert!',
                       subTitle: 'Please Rate',
                        buttons: ['ok']
                        
                         
                  });
                  alert.present();

      }

      else if(this.message==undefined||this.message=='undefined'){
        let alert = this.alertCtrl.create({
                       title: 'Alert!',
                       subTitle: 'Please write Review',
                        buttons: ['ok']
                        
                         
                  });
                  alert.present();

      }

      else{
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.Customeraddreview(this.salonid,this.message,this.starid))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.reviewres = data
                         if(this.reviewres.status==1){
                       let alert = this.alertCtrl.create({
                       title: 'Thank You',
                       subTitle: 'Your Review added Successfully',
                        buttons: ['ok']
                        
                         
                  });
                  alert.present();
                     this.viewCtrl.dismiss();
                            this.message=''  
                            this.rate=''
                           }
                                                }),
                           error =>
              loading.dismiss().then(() => {
              let alert=this.alertCtrl.create({
              title:'Something Went Wrong',
             subTitle:'Please Try Again',
             buttons:['Ok']
              })         
           alert.present()})
                    ); 
     }
}
 }
dismiss() {
   // let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss();
 }
}
