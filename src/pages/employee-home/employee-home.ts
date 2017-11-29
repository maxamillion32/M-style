import { Component } from '@angular/core';
import { IonicPage,NavController,Events, NavParams,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import {DataService}  from '../../providers/data-service';
/**
 * Generated class for the EmployeeHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-home',
  templateUrl: 'employee-home.html',
})
export class EmployeeHome {
 tilesdata;
 items
 menu;
 backimg;
 imagePath:any;
 bookingcount
 count
  constructor(public navCtrl: NavController,menu:MenuController,
   public events: Events,public loadingCtrl:LoadingController,
     private dataservice:DataService,public alertCtrl:AlertController,
    public navParams: NavParams) {
     this.imagePath=localStorage['img']
    this.menu = menu;
   this.menu.enable(true, 'myMenu')
    // this.backimg = './assets/img/model-image.jpg';

   events.subscribe('user:created', (user,authinfo,username,userpic,optional?) => {
                if(optional){
                   this.imagePath=optional                    
                }

                else{
                   this.imagePath=userpic;      
                }
          

             });
           

  }
  directory(){
    localStorage['directory']=true;

     this.navCtrl.push('CustomerCategories')
  }
  
notification(){
  this.navCtrl.push('EmployeeNotification')
}
  Profile(){

  	this.navCtrl.push('EmployeeViewEditProfile')

  }
client(){
     this.navCtrl.push('EmployeeClient')
}
  Gallery(){
     this.navCtrl.push('EmployeeUploadImages')
  }

  APPOINTMENTS(){
     this.navCtrl.push('EmployeeAppointments')
  }
  FAQ(){

  	this.navCtrl.push('Faq')

  }

  About(){
  	this.navCtrl.push('AboutUs')

  }

  Contact(){

  	this.navCtrl.push('ContactUs')
         
  }


  // ngOnInit(){


  //    this.notificationcount()

        
  // }

ionViewWillEnter(){
   let loading = this.loadingCtrl.create({content: 'Please Wait...'});
       Observable.fromPromise(loading.present())
   .flatMap(data => this.dataservice.EmployeeBookingCounts())
         .subscribe(data=>{
           loading.dismiss().then(()=>{
              this.bookingcount = data;
         this.count= this.bookingcount.totalcount;
    console.log("salondetails info"+JSON.stringify(this.bookingcount));
              }),

                      error =>
                      loading.dismiss().then(() => {
                           let alert = this.alertCtrl.create({
                      title: 'SERVER ERROR',
                      subTitle: 'Something Went Wrong',
                      buttons: ['ok']
                          });
                    alert.present(); 
                      })
        

         
      // setTimeout(() => {
      //    this.notificationcount();
      //   }, 10000);
         

          }) 
       }
 


}
