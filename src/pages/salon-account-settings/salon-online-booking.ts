import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import{DataService} from "../../providers/data-service"
import { Observable} from "rxjs/Rx"
/**
 * Generated class for the SalonOnlineBooking page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector:'page-salon-online-booking',
  templateUrl:'salon-online-booking.html',
})
export class SalonOnlineBooking {
selected_value1
selected_value2
selected_value3
selected_value4
selected_value5
selected_value6
payment_value
enable
mydata
schedule_appointment
online_notice
online_cancel
payment_value2
available_value
available_value2
availability_value
salon_visible_value
my_status_available
my_availability
my_availability2
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public dataservice:DataService,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonOnlineBooking');
  }


  ngOnInit(){

let loading = this.loadingCtrl.create({content: 'Loading...'});
        Observable.fromPromise(loading.present())
            .flatMap(data => this.dataservice.get_account_settings())
.subscribe(data =>
// schedule_appointment":15,"hours_notice_for_online_booking"
// :30,"hours_notice_for_cancel_booking
                 loading.dismiss().then(() =>{ 
            this.mydata=data            
                 this.payment_value=this.mydata.data.online_booking
                  this.available_value=this.mydata.data.my_availability
                 
                 this.salon_visible_value=this.mydata.data.salon_visibility 
                    this.selected_value2=this.mydata.data.schedule_appointment
              this.selected_value4=this.mydata.data.hours_notice_for_online_booking
           this.selected_value5=this.mydata.data.hours_notice_for_cancel_booking

                           this.selected_value2="On"+" "+this.selected_value2+" "+"Min"
                           if(this.selected_value4==30){
                   this.selected_value4=this.selected_value4+" "+"Min"
                 }

else {
  this.selected_value4=this.selected_value4+" "+"Hour"
}
                      if(this.selected_value5==30){
                   this.selected_value5=this.selected_value5+" "+"Min"
                 }

else {
  this.selected_value5=this.selected_value5+" "+"Hour"
}
                                 if(this.payment_value==1){
                                 this.payment_value=true
                                }
                      else{
                        this.payment_value=false
                      }
        if(this.salon_visible_value=='enable'){
                                 this.salon_visible_value=true
                                }
                      else{
                        this.salon_visible_value=false
                      }

 if(this.available_value=="on dutty"){
                                 this.my_availability=true
                                }
                      else{
                        this.my_availability=false
                      }



                    }),
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
     );

}





    presentModal1() {
    let modal = this.modalCtrl.create('OnlineConfirmation');
    modal.present();
       modal.onDidDismiss(data =>{
         if(data.value==undefined){
           this.selected_value1=""
         }
         else{
        this.selected_value1=data.value
}
        
       })

  }



  //    presentModal2() {
  //   let modal = this.modalCtrl.create('TimeSlots');
  //   modal.present();
  //      modal.onDidDismiss(data =>{
  //       this.selected_value2=data.value
        
  //      })

  // }

       presentModal2() {
    let modal = this.modalCtrl.create('TimeZone');
    modal.present();
       modal.onDidDismiss(data =>{
              if(data.value==undefined){
                this.selected_value2=" "
              }else{
        this.selected_value2=data.value
      }
       })

  }

  //         presentModal3() {
  //   let modal = this.modalCtrl.create('SalonMultiServiceBooking');
  //   modal.present();
  //      modal.onDidDismiss(data =>{
  //       this.selected_value3=data.value
        
  //      })

  // }

            presentModal4() {
    let modal = this.modalCtrl.create('TimeNotice');
    modal.present();
       modal.onDidDismiss(data =>{
          if(data.value==undefined){
            this.selected_value4=" "
          }
          else{
        this.selected_value4=data.value
        
       }})

  }
       

            presentModal5() {
    let modal = this.modalCtrl.create('SalonCancelHours');
    modal.present();
       modal.onDidDismiss(data =>{
         if(data.value==undefined){
           this.selected_value5=" "
         }
         else{
        this.selected_value5=data.value
        }
       })

  }

status(){

  if(this.payment_value==true){
let alert = this.alertCtrl.create({
         title: 'Online Payment Enabled',
   
        buttons: ['Dismiss']
        });
        alert.present();   
}
else{
  if(this.payment_value==false){
let alert = this.alertCtrl.create({
         title: 'Online Payment Disabled',
   
        buttons: ['Dismiss']
        });
        alert.present(); 


}
}}

 status_visible(){

  if(this.salon_visible_value==true){
let alert = this.alertCtrl.create({
         title: ' Your Salon Visibility is now Turned On ',
   
        buttons: ['Dismiss']
        });
        alert.present();   
}
else{
  if(this.salon_visible_value==false){
let alert = this.alertCtrl.create({
         title: 'Your Salon Visibility is now Turned Off',
   
        buttons: ['Dismiss']
        });
        alert.present(); 


}}
}

status_available(){

 if(this.my_availability==true){
let alert = this.alertCtrl.create({
         title: ' My Availability is now Turned On ',
   
        buttons: ['Dismiss']
        });
        alert.present();   
}
else{
  if(this.my_availability==false){
let alert = this.alertCtrl.create({
         title: 'My Availability is now Turned Off',
   
        buttons: ['Dismiss']
        });
        alert.present(); 


}}

}



Save(){

  var splited1=this.selected_value2.split(" ")
        this.schedule_appointment= splited1[1]
 
     var splited2=this.selected_value4.split(" ")
        this.online_notice= splited2[0]
 

          var splited3=this.selected_value5.split(" ")
        this.online_cancel= splited3[0]

  if (this.payment_value==true){

    this.payment_value2='enable'
  
  }
      else
        if(this.payment_value==false){
          this.payment_value2='disable'
        }
 if (this.salon_visible_value==true){

    this.available_value2='enable'
  
  }
      else
        if(this.salon_visible_value==false){
          this.available_value2='disable'
        }


if (this.my_availability==true){

    this.my_availability2='on_dutty'
  
  }
      else
        if(this.my_availability==false){
          this.my_availability2='off_dutty'
        }

// if(this.my_availability2!="" ||this.online_notice!=" "|| this.online_cancel!= ""){
let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.account_settings(this.payment_value2,this.schedule_appointment,this.available_value2,this.my_availability2,this.online_notice,this.online_cancel))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                      if(data.status==1){
   let alert = this.alertCtrl.create({
         title: 'SAVED SUCCESSFULLY',
   
        buttons: ['Dismiss']
        });
        alert.present();   


                      
}
else if(data.status==0){
let alert = this.alertCtrl.create({
         title: 'PLEASE FILL ALL FIELDS',
   
        buttons: ['Dismiss']
        });
        alert.present();   

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
       // }
       // else {

       //   alert('ho')
       // }

  
    
 

}
cancel(){
this.navCtrl.pop()

  }
  
}
  



