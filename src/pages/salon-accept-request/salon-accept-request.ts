import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import {Http} from '@angular/http';
import {DataService}  from '../../providers/data-service';

/**
 * Generated class for the SalonAcceptRequest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-accept-request',
  templateUrl: 'salon-accept-request.html',
})
export class SalonAcceptRequest {
notification_data
mynotifydata
payment_id
booking_status
mydata
service_selected=[]
id
image
ourstatus
show
tabBarElement
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public dataservice:DataService,public alertCtrl:AlertController) {
  	                       this.notification_data=this.navParams.get('nextpagedata')
  	                       this.mynotifydata =this.notification_data.serviceinfo
               
  	                       this.image=this.notification_data.customer_image
  // this.tabBarElement = document.querySelector('.tabbar.show-tabbar'); 
                           for(var i=0;i<this.mynotifydata.length;i++){
                              // alert(this.mynotifydata)
                       this.service_selected.push(this.mynotifydata[i].title+' ')
                              
 

                           }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonAcceptRequest');
  }

accept(){
          
 let loading = this.loadingCtrl.create({content:'Please Wait ...'
          });
         Observable.fromPromise(loading.present())
          .flatMap(data => this.dataservice.AcceptBooking(this.notification_data.payment_id,1))
               .subscribe(data =>
        loading.dismiss().then(() => {
          this.mydata = data
                        this.show=data.status
             if(this.show==0){
                   let alert = this.alertCtrl.create({
               
               subTitle: data.message,
               buttons: ['OK']
             });
             alert.present();
                             }
                       else

          if(this.mydata.message=="Your Booking Accepted By Salon Owner"){
          let alert = this.alertCtrl.create({
               title: 'Done!',
               subTitle: 'Booking is successfully accepted',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.pop()

}
}
),
   error =>
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()

})



        )
   }  
takeMeback(){
  this.navCtrl.parent.select(0)
}
decline(booking_id){
 let loading = this.loadingCtrl.create({content:'Please Wait ...'
          });
         Observable.fromPromise(loading.present())
          .flatMap(data => this.dataservice.DeclineBooking(this.notification_data.payment_id,2))
               .subscribe(data =>
        loading.dismiss().then(() => {
              this.mydata = data
                             this.show=this.mydata.status
                             if(this.show==0){
                   let alert = this.alertCtrl.create({
               
               subTitle: data.message,
               buttons: ['OK']
             });
             alert.present();
                             }
                       else
              //      localStorage['mystatus']=this.mydata
          if(this.mydata.message=='Your Booking Declined By Salon Owner'){
             let alert = this.alertCtrl.create({
               title: 'Done!',
               subTitle: 'Booking is successfully declined',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.pop()
}
}
),
           error =>
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()

})

        )
}

// ionViewWillLeave() {
//     this.tabBarElement.style.display =  'flex' 
// }

// ionViewWillEnter() {
//     this.tabBarElement.style.display = 'none';  
// }
}
