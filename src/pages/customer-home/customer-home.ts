import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Device} from 'ionic-native';
/**
 * Generated class for the CustomerHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-home',
  templateUrl: 'customer-home.html',
})
export class CustomerHome {
    category;
    http;
    data;
    saloninfo;
    salonlist;
    directory;
    salonservices;
    updatedsalonlist;
    averageratingdata;
    categoryid;
    nosalon;
  constructor(public navCtrl: NavController, 
   private locationAccuracy: LocationAccuracy, 
   public loadingCtrl: LoadingController,
   private dataservice:DataService,
   public alertCtrl:AlertController,
   public navParams: NavParams,http:Http) {
            this.http=http;
            this.data={}
  	        this.category=this.navParams.get('categoryselected')
            this.categoryid=this.navParams.get('categoryid')
  	        this.directory=localStorage['directory'];
           
              this.nosalon='false'
           
  }

 getItems(ev: any) {

        
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.salonlist = this.salonlist.filter((p) => {
         return (p.salon_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        } else {
            this.salonlist = this.updatedsalonlist;
        }
    }

ngOnInit(){

  this.asklocation()
  
       let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.CustomerSalonList(this.categoryid))
         .subscribe(data=>{
         loading.dismiss().then(()=>{


         this.saloninfo = data;

         if(this.saloninfo.status==1){
         // console.log("salondetails info"+JSON.stringify(this.saloninfo.data));
        this.salonlist=this.saloninfo.data.reverse();
        this.updatedsalonlist=this.saloninfo.data;
        this.averageratingdata=this.saloninfo.averagerating;
        console.log("salon services"+JSON.stringify(this.salonservices)) 
         }

         else if(this.saloninfo.status==0){

           // alert("no Salon")
             this.nosalon='true'
           
         }
    
         }),
         error =>
             loading.dismiss().then(() => {
            let alert=this.alertCtrl.create({
            title:'SERVER ERROR',
            subTitle:'Please Try Again',
            buttons:['Ok']
           })  
            loading.dismiss()       
           alert.present()}); 

          })  
        
}
 // doRefresh(refresher) {

 //    console.log('Begin async operation', refresher);
 // this.http.get('http://gagandeepsethi.com/salonDirectory/WebServices/customerSideSalonListing.json') 
 //      .map(response => response.json())
 //     .subscribe(data=>{       
 //       this.saloninfo = data;
 //        // console.log("salondetails"+JSON.stringify(this.saloninfo.data));
 //        this.salonlist=this.saloninfo.data.reverse();
 //        this.updatedsalonlist=this.saloninfo.data;
 //        console.log("salon services"+JSON.stringify(this.salonservices))
 //     });    
 //    setTimeout(() => {
 //      console.log('Async operation has ended');
 //      refresher.complete();
 //    }, 2000);
 //  }
detail(id,salonimage,salonname,salonlat,salonlng){
    // alert("hello salonid"+id)
       
    localStorage['lat']=salonlat
    localStorage['lng']=salonlng
    this.navCtrl.push('Customersalondetail',{salondetail:id,salonimg:salonimage,salonname:salonname})
}
near(){
  this.navCtrl.push('NearBySalon')
}

Favlist(){
  this.navCtrl.push('CustomerFavSalon')
}
asklocation(){
 
this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if(canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            console.log('Request successful.')
            // alert("request Granted")
          },
          error => {
            console.log('Error requesting location permissions', error)
             // alert("request fail")
              let alert = this.alertCtrl.create({
                      title: 'Error!',
                      subTitle: 'Requesting location permissions',
                      buttons: ['ok']
                    });
                    alert.present();  
            
          }
        );
      }
    });
}
// ionViewCanEnter(){
//   alert("hello ")
// }
}
