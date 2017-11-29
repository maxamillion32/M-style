import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import {Http} from '@angular/http';
import {DataService}  from '../../providers/data-service';

var v
// promatics.asif@gmail.com
/**
 * Generated class for the SalonNotification page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-notification',
  templateUrl: 'salon-notification.html',
})
export class SalonNotification {
  @ViewChild('#myId') ourId
mydata
printdata
  notication_data
mynotication_data
y
minedata
index_array=[]
array_length
array_index
cancel_notication_data
segment
all_index_array=[]
items
item
notification_count
OurCount
notifiy_count
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public dataservice:DataService,public alertCtrl:AlertController) {
            this.notication_data=this.navParams.get('notfication_all_data')

                       // this.mynotication_data = this.notication_data.bookinginfo
                       //    this.cancel_notication_data = this.notication_data.cancelinfo
                  
                      // this.notification_count=this.notication_data.bookingcount
                      
                       this.segment="booking_request"


                    
         }

  ionViewDidLoad() {
    console.log(this.ourId);
  }

opennotification(m,index){

     v='var_'+index
       this.array_index=v
  
      var x = document.getElementById(v);
    
     this.all_index_array.push(v)
 
  

       x.style.background="#fff"
        this.navCtrl.push('SalonAcceptRequest',{nextpagedata:m})
      this.array_length = this.index_array.length

              let loading = this.loadingCtrl.create({content:'Please Wait ...'
          });
         Observable.fromPromise(loading.present())
             .flatMap(data => this.dataservice.ResetCount(m.payment_id,this.array_index))
               .subscribe(data =>
             loading.dismiss().then(() => {
             this.mydata = data
               this.printdata=this.mydata.bookinginfo
                        
}))

               }





opennotification2(m,index){

     v='var_'+index
  this.array_index=v
   
    var x =document.getElementById(v);
 
  

       x.style.background="#000"
        this.navCtrl.push('Saloncancelbookings',{nextpagedata:m})
      this.array_length = this.index_array.length

               }




   ionViewWillEnter(){
         let loading = this.loadingCtrl.create({content: 'Loading...'});
          Observable.fromPromise(loading.present())
           .flatMap(data => this.dataservice.MySalonNotification())
          .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.minedata = data
        this.mynotication_data = this.minedata.bookinginfo.reverse()
                  this.cancel_notication_data = this.minedata.cancelinfo
                         //             this.mystatus=this.minedata.status            
                         this.notifiy_count=this.minedata.bookingcount
                   localStorage['count']=  this.notifiy_count
           
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










// ngOnInit(){
  
//   this.storage.get('myStore').then((data) => {
//       this.items = data;
//     // alert("1st"+JSON.stringify(this.items))
//      if(this.items.length!=null){
//           // alert(this.items.length) 
//              for(var i=0;i<this.items.length;i++){
          
//                 var y =document.getElementById(this.items[i]);
//                     y.style.background="#fff"
//              }}   

//     })


// }
// color_Change(event){
//    if(event=="cancel_bookings"){
//    this.storage.get('myStore2').then((data) => {
//                  this.item = data;
             
                
//                  if(this.item.length!=null){  
              
//              for(var i=0;i<this.item.length;i++){
                 
//                 var x =document.getElementById(this.item[i]);
//                     x.style.background="#fff"
//              }   }

//     })

// }
// else if(event=="booking_request"){

// this.ngOnInit();

// }
// }


  //       this.storage.get('myCount').then((data)=>{
    //   alert("@@"+data)
    //      this.OurCount=6
    //      this.OurCount--
    //      alert(this.OurCount)
    // })

   // this.storage.set('myCount',this.OurCount);

   //       this.storage.get('myStore').then((data) => {
   //    if(data != null)
   //    {
   //      data.push(v);
   //      this.storage.set('myStore', data);
     
   //    }
   //    else
   //    {
   //      let array = [];
   //      array.push(v);
   //      this.storage.set('myStore', array);
       
   //    }});