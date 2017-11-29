import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import { Events } from 'ionic-angular';
/**
 * Generated class for the MySalonHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-home',
  templateUrl: 'my-salon-home.html',
})
export class MySalonHome {
minedata
myimage
user_id
menu
userprofilepic
notiydata
notification_count
count_response 
mycount
mydata
username
mystatus
profileVisible
  imagePath
  usertype
auth
ourdata
mynotication_data
cancel_notication_data
notifiy_count
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private dataservice:DataService,public events: Events,menu:MenuController,public alertCtrl:AlertController) {
    this.userprofilepic=localStorage['img']
  

    this.username=localStorage['username'];
    this.menu=menu
    this.menu.enable(true,'myMenu')
    
 events.subscribe('user:created', (user,authinfo,username,userpic,optional?) => {
                if(optional){
                    this.userprofilepic=optional                    
                }

                else{
                   this.userprofilepic=userpic;      
                }
          

             });
           
  
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySalonHome');
  }
myapointments(){
// this.navCtrl.push('SalonAppointment')
this.navCtrl.push('SalonClientBooking')

}

onlinebooking(){
this.navCtrl.push('SalonOnlineBooking')


}
businessinfo(){
	this.navCtrl.push('SalonBuisnessInfo')
}
myservicelist(){
this.navCtrl.push('SalonServiceList')

}

notification(){
  this.navCtrl.push('SalonNotification',{notfication_all_data:this.minedata})
 }


addemploye(){
	this.navCtrl.push('MyEmployees')
}

upload_myimages(){
 
	this.navCtrl.push('MySalonImageUpload')
    }
subscription_plans(){
  this.navCtrl.push('MySalonSubscrptionPage1')
}

paymentstatus(){
  this.navCtrl.push('SalonPaymentPage')
}
myclients(){

this.navCtrl.push('SalonMyClient2')
}

 mylocation()
{
   localStorage['directory']=true;

  this.navCtrl.push('CustomerCategories')
}

ionViewWillEnter(){
 
         let loading = this.loadingCtrl.create({content: 'Loading...'});
          Observable.fromPromise(loading.present())
           .flatMap(data => this.dataservice.MySalonNotification())
          .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.minedata = data
        // this.mynotication_data = this.minedata.bookinginfo
        //           this.cancel_notication_data = this.minedata.cancelinfo
                         //             this.mystatus=this.minedata.status            
                         this.notification_count=this.minedata.bookingcount
                   // localStorage['count']=  this.notifiy_count
           
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
                     }))

}
}
            


