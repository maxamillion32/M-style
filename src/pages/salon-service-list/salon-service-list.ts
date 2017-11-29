
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';

import {DataService } from "../../providers/data-service"
import { Observable} from "rxjs/Rx";
import { AlertController, ViewController } from 'ionic-angular';
/**
 * Generated class for the SalonServiceList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-service-list',
  templateUrl: 'salon-service-list.html',
})
export class SalonServiceList {
amount
leads
amount1
cost
time
description
service_name
salon_id
descriptiondata
name
mydata
printdata
show
id
minedata
emp_name
  constructor(public navCtrl: NavController,
   public navParams: NavParams,public modalCtrl :ModalController,
   public loadingCtrl:LoadingController,private dataservice :DataService,private alertCtrl: AlertController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonServiceList');
  }
myservicedescrptn(m){


this.navCtrl.push('SalonServiceDescription',{data:m})
}


add_service(){
	 let profileModal = this.modalCtrl.create('AddService',{data:this.minedata});
   profileModal.present();
profileModal.onDidDismiss(data => {
this.service_name=data.a ;
this.cost=data.b;
this.time=data.c;
this.description=data.d
this.emp_name=data.e

if(this.cost>0){

let loading = this.loadingCtrl.create({content: 'Loading...'});
        Observable.fromPromise(loading.present())
            .flatMap(data => this.dataservice.add_service(this.service_name,this.cost,this.time,this.description,this.id,this.emp_name))
            .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.leads = data
                        if(this.leads.message=="data saved successfully"){
                      this.ngOnInit();
  //                                               let alert = this.alertCtrl.create({
  //   title: 'Service Added Sucesfully',
   
  //   buttons: ['Dismiss']
  // });
  // alert.present();
                         
                        }
       else if(this.leads.status==0){
                        let alert = this.alertCtrl.create({
         title: 'Please Fill All Fields',
   
        buttons: ['Dismiss']
        });
        alert.present();     
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
else{
let alert=this.alertCtrl.create({
        title:'Cost Cannot Be 0 ',
         buttons:['Ok']
      })
      
      alert.present()




}
}


)

}







ngOnInit(){
let loading = this.loadingCtrl.create({content: 'Loading'});
    Observable.of(loading).flatMap(loading => loading.present())

     .flatMap(data => Observable.forkJoin(this.dataservice.view_employee_list(this.id),this.dataservice.getmyservicedata(this.salon_id)))
    

     .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                       this.minedata=data[0]
                   
                        this.mydata=data[1]
                           this.printdata = this.mydata.data
                    }),
               error=>{
      let alert=this.alertCtrl.create({
        title:'Timeout',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()
    })











// let loading = this.loadingCtrl.create({content: 'Loading...'});
//         Observable.fromPromise(loading.present())
//             .flatMap(data => this.dataservice.getmyservicedata(this.salon_id))
// .subscribe(data =>

//                     loading.dismiss().then(() =>{ 

//                    this.show=data.message               
//                               this.mydata = data
//                           	this.printdata = this.mydata.data
                    
                      
                
//                     }),
//                 error =>
//                     loading.dismiss().then(() => {
//                       let alert=this.alertCtrl.create({
//         title:'Timeout',
//         subTitle:'Please Try Again',
//         buttons:['Ok']
//       })
//       loading.dismiss();
//       alert.present()

//                     })
//      );

}
delete(m){

let loading = this.loadingCtrl.create({content: 'Loading..'});
        Observable.fromPromise(loading.present())
            .flatMap(data => this.dataservice.delete_service(m))
            .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.leads = data
                        if(this.leads.message=="Service deleted successfully"){
                    
                                                    let alert = this.alertCtrl.create({
                                                  title: 'Service Deleted  Successfully',
   
    buttons: ['Dismiss']
  });
  alert.present();
                         this.navCtrl.pop();
                           
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



}
