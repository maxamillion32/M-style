import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController
,ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";;
declare var google;
import { SocialSharing } from '@ionic-native/social-sharing';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
declare var cordova: any;
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-customersalondetail',
  templateUrl: 'customersalondetail.html',
})
export class Customersalondetail {
// segment='map';
salonimg;
 mylat
mylong
salondata;
salonid
http
salondetail
services
saloncontactnumber
favdata;
customerid;
favo;
checkstatus;
 map: any;
 ourlat
 ourlong
 noservices
 salonname
 salondescription
 salontitle
 salonlatitude
 salonlongitude
 abc;
 segment;
 destination:any;
 viewreviewdata;
 viewreviewinfo;
favres
 usercurrentlat;
 usercurrentlng;
 start
 noreview
 directory
 services2
 salonaddress
 schedule
 facebooklink
 website
 instagram
 wifi
 wheel
 parking
  constructor(public navCtrl: NavController, 
   private iab: InAppBrowser,
   public loadingCtrl: LoadingController,
   public alertCtrl:AlertController,
   private dataservice:DataService,
   public navParams: NavParams,
   private callNumber: CallNumber,
   private platform: Platform,
   private geolocation: Geolocation,
   public modalCtrl: ModalController,
   http:Http,private socialSharing: SocialSharing,
   private launchNavigator: LaunchNavigator) {

       this.geolocation.getCurrentPosition().then((resp) => {
       this.usercurrentlat=resp.coords.latitude;
       this.usercurrentlng=resp.coords.longitude;
     }).catch((error) => {
  console.log('Error getting location', error);
       });
          // this.noreview='false';
         this.noservices='false';
         this.abc = 'withoutmap';
    this.salonimg=this.navParams.get('salonimg');
    this.salontitle=this.navParams.get('salonname');
    // this.salonlatitude=this.navParams.get('salonlat');
    // this.salonlongitude=this.navParams.get('salonlng');
    this.salonlatitude =parseInt(localStorage['lat'])
    this.salonlongitude=parseInt(localStorage['lng'])
    this.http=http;
    this.segment="service"
    this.salonid=this.navParams.get('salondetail');
    this.salonimg=this.navParams.get('salonimg');
    localStorage['salonimage']=this.salonimg;
    this.salondata=this.navParams.get('salondata');
    console.log("hello Salon data"+JSON.stringify(this.salondata))
    this.customerid=localStorage['customerid']
    this.directory=localStorage['directory'];
    //alert("hello Salon img"+JSON.stringify(this.salonimg))
  	
  }

  ngOnInit(){
  
   // let loading = this.loadingCtrl.create({content: 'Please Wait...'});
   //       Observable.fromPromise(loading.present())
   //       .flatMap(data => this.dataservice.customerSideSalonServices(this.salonid))
   //   .subscribe(data=>{

      
   //      loading.dismiss().then(()=>{
   //         this.salondetail = data;

   //     console.log("hello kaun aya"+JSON.stringify(this.salondetail))
   //     this.services=this.salondetail.data;
   //    console.log("hello kaun aya 2"+JSON.stringify(this.services))
   //     this.services2=this.salondetail.data.salon_services;  
   //     this.dataservice.value.services=this.services.salon_services;
       
   // //  this.mylat=this.services[0].latitude
   // // this.mylong= this.services[0].longitude
   // //            alert("mydata"+ JSON.stringify(this.services.latitude))


   //       // console.log("service hai"+JSON.stringify(this.services.data.data)) 
   //       console.log("number"+JSON.stringify(this.services.contact_number))  
   //       this.saloncontactnumber=this.services.contact_number; 
   //       this.salonaddress=this.services.address;
   //       this.schedule=this.services.schedule;
   //        console.log("number2"+JSON.stringify(this.services.salon_name)) 
   //       this.salonname=this.services.salon_name; 
   //       this.facebooklink=this.services.facebooklink; 
   //       this.website=this.services.website; 
   //       this.instagram=this.services.instagramlink; 
   //       this.wifi=this.services.wifi; 
   //       this.wheel=this.services.wheelchair; 
   //       this.parking=this.services.parking; 
   //       this.dataservice.datavalue.salonname=this.salonname;
   //        this.dataservice.datavalue.salonaddress=this.services.address;
   //        this.salondescription=this.services.salon_description;
         

   //      // console.log("null data"+JSON.stringify(this.services[0].salon_services))
            
   //          var a=this.services.salon_services;
   //       if(a==[] || a=='' || a=='[]'){

           
   //               this.noservices='true'

       

   //       }
   //     }),  error =>
   //           loading.dismiss().then(() => {
   //        let alert=this.alertCtrl.create({
   //          title:'Something Went Wrong',
   //         subTitle:'Please Try Again',
   //          buttons:['Ok']
   //    })
     
   //    alert.present()});
      
             
   //   })
    
   //  this.status();

   //  this.viewReviews();
    // this.initMap();

     this.salonservices_status_reviews()
}



Direction(){
  // alert("Route")
 this.start=[this.usercurrentlat,this.usercurrentlng]
let options: LaunchNavigatorOptions = {
      start:this.start
    };
this.launchNavigator.navigate([this.salonlatitude,this.salonlongitude], options)
 .then(
     (success) => {
       console.log('Launched navigator')
     }
    
).catch((error)  => 
    {
  alert('Error launching navigator: ' + JSON.stringify(error))
   }
 )
}

call(){
   this.callNumber.callNumber(this.saloncontactnumber, true)
  .then(() => 
    console.log('Launched dialer!')
  	)
  .catch((error) => 
  	console.log('Error launching dialer'+error)
  	);
}

share(){
var path='https://play.google.com/store'
this.socialSharing.share(null, 'BARBER&BEAUTY',null,path).then(() => {
}).catch(() => {
  console.log('Error launching share')
});

}

Gallery(){
this.navCtrl.push('CustomerSalonGallery',{salonid:this.salonid})
 }


list(title){
this.dataservice.value2.selectedservices=title;       
this.navCtrl.push('CustomerEmployeeListing',{salonid:this.salonid})
}
   



loadmap(){

  if(this.segment=='map'){
          this.abc = 'map4';
  let mapEle=document.getElementById('map3')
  this.map = new google.maps.Map(mapEle, {
    zoom: 8,
    center: {lat:this.salonlatitude,lng:this.salonlongitude},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    
  });
  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    mapEle.classList.add('show-map');
    google.maps.event.trigger(mapEle, 'resize');
  });
this.addMarker(this.salonlatitude,this.salonlongitude)
   

  }
  else if (this.segment == 'service') {

            this.abc = 'withoutmap';
        } else if (this.segment == 'review') {

            this.abc = 'withoutmap';
            
        }

}



 addMarker(a,b){
   // alert("inside marker latt"+a)
   // alert("inside marker lng"+b)
   if(a &&b){
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: {
      lat:a,
      lng:b
              }
   })

}
 }


// status(){ 
//   let loading = this.loadingCtrl.create({content: 'Please Wait...'});

//      var link='http://europa.promaticstechnologies.com/salonDirectory/WebServices/salonFavouriteStatus.json';
//     var data=JSON.stringify({
//          salon_id:this.salonid,
//          customer_id:localStorage['customerid']
//     })

//   this.http.post(link,data)
//    .map(response => response.json())
//      .subscribe(data=>{
//        loading.dismiss().then(()=>{
//          this.checkstatus = data;

//        if(this.checkstatus.status=='active'){

//             this.favo=1;

//        }

//        else {

//            this.favo=0;
//        }
//      }),error =>
//              loading.dismiss().then(() => {
//           let alert=this.alertCtrl.create({
//             title:'Something Went Wrong',
//            subTitle:'Please Try Again',
//             buttons:['Ok']
//       })
     
//       alert.present()});
       
       
        
//      });  

// }
// viewReviews(){
//   let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });

//   loading.present();
//    var link='http://europa.promaticstechnologies.com/salonDirectory/WebServices/customerViewReviewAndRating.json';
//     var data=JSON.stringify({
//          salon_id:this.salonid,
         
//     })

//   this.http.post(link,data)
//    .map(response => response.json())
//      .subscribe(data=>{
//        loading.dismiss().then(()=>{

//             this.viewreviewdata = data;
//        this.viewreviewinfo= this.viewreviewdata.ratinginfo;
//            // console.log("review data"+JSON.stringify(this.viewreviewdata))

//        if(this.viewreviewdata.status==0){
//          // alert("no review Added")

//              this.noreview='true'
//        }
//        else{
//           this.noreview='false'
//        }
//        }),   error =>
//              loading.dismiss().then(() => {
//           let alert=this.alertCtrl.create({
//         title:'Something Went Wrong',
//         subTitle:'Please Try Again',
//         buttons:['Ok']
//       })
     
//       alert.present()


//                       });
    
//      })    

// }
addreview(){
  let profileModal = this.modalCtrl.create('CustomerAddReviewModel',{salonname:this.salonname,salonid: this.salonid});
   profileModal.onDidDismiss(data => {
     console.log(data);
     this.salonservices_status_reviews()
   });
   profileModal.present();
 // this.navCtrl.push('CustomerAddReview',{salonname:this.salonname,salonid: this.salonid})
}

fav(){
  
 let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.addtofavourite(this.salonid))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.favres = data
                          
                     if(this.favres.message=='Add to Favourite'){
                     let alert = this.alertCtrl.create({
                      title: 'Thank You!',
                      subTitle: 'Salon Added to Favourites',
                      buttons: ['ok']
                    });
                    alert.present();  
                    this.salonservices_status_reviews()
                     } 

                     else if(this.favres.message=='Remove To Favourite'){

                     let alert = this.alertCtrl.create({
                      title: 'Alert!',
                      subTitle: 'Salon Removed from Favourites',
                      buttons: ['ok']
                    });
                    alert.present(); 
                     this.salonservices_status_reviews()

                     }                                }),
                      (error) =>{
                      loading.dismiss().then(() => {
                        let alert = this.alertCtrl.create({
                      title: 'ALERT!',
                      subTitle: 'Something Went Wrong',
                      buttons: ['ok']
                          });
                    alert.present(); 
                      })
                   } ); 

  
}
openweb(website){
 
  if (website.indexOf('https://')==-1) {
    
      var web='https://'+website;
      window.open(web, "_system", "location=true");
  }
  else{
    window.open(web, "_system", "location=true");
  }
}
fblink(facebooklink){
             // var a='https://'+facebooklink;
             var b=facebooklink;
             window.open(b, "_system", "location=true");
     
}


openinstalink(instagramlink){

  // var insta='https://'+instagramlink;

  var c=instagramlink;
   window.open(c, "_system", "location=true");

}
salonservices_status_reviews(){
 let loading = this.loadingCtrl.create({content: 'Please wait...'});
  loading.present();
   Observable.forkJoin(
        this.http.post('http://gagandeepsethi.com/salonDirectory/WebServices/customerSideSalonServicesListing.json',{salon_id:this.salonid}).map((res:Response) => res.json()),
        this.http.post('http://gagandeepsethi.com/salonDirectory/WebServices/salonFavouriteStatus.json',{salon_id:this.salonid,customer_id:localStorage['customerid']}).map((res:Response) => res.json()),
        this.http.post('http://gagandeepsethi.com/salonDirectory/WebServices/customerViewReviewAndRating.json',{salon_id:this.salonid}).map((res:Response) => res.json())
    ).subscribe(
      data => {
        loading.dismiss();
       this.salondetail = data[0]
       this.services=this.salondetail.data;
       this.services2=this.salondetail.data.salon_services;  
       this.dataservice.value.services=this.services.salon_services; 
       this.saloncontactnumber=this.services.contact_number; 
       this.salonaddress=this.services.address;
       this.schedule=this.services.schedule;
       this.salonname=this.services.salon_name; 
       this.facebooklink=this.services.facebooklink; 
       this.website=this.services.website; 
       this.instagram=this.services.instagramlink; 
       this.wifi=this.services.wifi; 
       this.wheel=this.services.wheelchair; 
       this.parking=this.services.parking; 
       this.dataservice.datavalue.salonname=this.salonname;
       this.dataservice.datavalue.salonaddress=this.services.address;
       this.salondescription=this.services.salon_description;
            
         var a=this.services.salon_services;
         if(a==[] || a=='' || a=='[]'){  
           this.noservices='true'
         }


         //status



         this.checkstatus  = data[1]

       if(this.checkstatus.status=='active'){

            this.favo=1;

       }

       else {

           this.favo=0;
       }


       //view Reviews
         this.viewreviewdata= data[2]
        this.viewreviewinfo= this.viewreviewdata.ratinginfo;
       if(this.viewreviewdata.status==0){
             this.noreview='true'
          }
       else{
          this.noreview='false'
       }
      },
      (err) => {
            
         loading.dismiss();

         let alert=this.alertCtrl.create({
          title:'SERVER ERROR',
          subTitle:'Please Try Again',
          buttons:['Ok']
           })
     
            alert.present()


      }
    );
  }
  //  ionViewWillLeave(){
  //         alert("leave")   
  // }
}