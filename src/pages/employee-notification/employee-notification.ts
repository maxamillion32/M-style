import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the EmployeeNotification page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-notification',
  templateUrl: 'employee-notification.html',
})
export class EmployeeNotification {
   notification;
   notificationdata;
   Notiseg
   declined
   nodata
   hide1
   canceldata
   cancelstatus
   confirmdata
   confirmstatus
   data
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private dataservice:DataService,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController) {
     this.Notiseg="accepted";
     this.nodata='false'
     this.hide1='false'
     this.data={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeNotification');
  }
  selectedtime(i){
   var v = 'var_' + i;
    var x = document.getElementById(v);
    x.style.background = "#FFFFFF";
     x.style.color = "#222222";
}
 ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeeNotification())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.notification = data;
                        if(this.notification.Data){
                        this.notificationdata=this.notification.Data.reverse();
                        this.declined=this.notification.cancel.reverse();

                console.log("hello ga abc"+JSON.stringify(this.declined))
     // alert("hello data check"+this.notification.Data)

                     if(this.notification.Data==''){

                        this.hide1='true'
                           
                     }
               
               }
                

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
                    ); 

  }

  confirm(paymentid,paystatus){
    // alert(paymentid)
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeeConfirmBooking(paymentid,paystatus))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.confirmdata=data;
                        this.confirmstatus=this.confirmdata.status

                          if(this.confirmstatus==1){
                         
                          
                          const alert = this.alertCtrl.create({
                          title: 'Thank You!',
                          subTitle: 'Booking Accepted Successfully',
                          buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                         handler: () => {
                           console.log('Cancel clicked');
                            this.ngOnInit();
                          }
                            },]
                       });
                  alert.present();
                          }
                             }),
                        error =>
         loading.dismiss().then(() => {
         let alert=this.alertCtrl.create({
        title:'SERVER ERROR',
        subTitle:'Please Try Again',
        buttons:['Ok']
           })
         loading.dismiss();
         alert.present()


                      })
                    );
   
  }
cancelbooking(payment_id,paystatus){
        
        
     const alert = this.alertCtrl.create({
    title: 'Confirm Cancel',
    message: 'Do you want to Cancel this Booking?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.cancel(payment_id,paystatus)
        }
      }
    ]
  });
  alert.present();
}
  cancel(paymentid,paystatus){
     // alert(paymentid)
      let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeeCancelBooking(paymentid,paystatus))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                      if(data){
                        this.canceldata=data;
                        this.cancelstatus=this.canceldata.status

                            if(this.cancelstatus==1){
                          const alert = this.alertCtrl.create({
                          title: 'Alert!',
                          subTitle: 'Booking Cancelled Successfully',
                          buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                         handler: () => {
                           console.log('Cancel clicked');
                            this.ngOnInit();
                          }
                            },]
                       });
                  alert.present();
                          }
                      }
                        

                 
                             }),
                        error =>
         loading.dismiss().then(() => {
         let alert=this.alertCtrl.create({
        title:'SERVER ERROR',
        subTitle:'Please Try Again',
        buttons:['Ok']
           })
         loading.dismiss();
         alert.present()


                      })
                    );
   
  }
}
