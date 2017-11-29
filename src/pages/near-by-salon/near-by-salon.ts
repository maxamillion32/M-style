import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google
import { Http } from '@angular/http';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
/**
 * Generated class for the NearBySalon page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-near-by-salon',
  templateUrl: 'near-by-salon.html',
})
export class NearBySalon {
lat:any;
lng:any;
map:any;
data;
markers=[];
arr=[];
ar=[];
i:number=0;
j:number=0;
posts;
http;
asif1
asif2;
asif3;
asif4;
range;
userid;
userlat;
userlng;
nearbyrange;
latres;
filterrange;
currentposlat;
currentposlng;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public geolocation: Geolocation,http:Http,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController, private locationAccuracy: LocationAccuracy) {
  	this.http=http;
    this.data={}
    this.posts='';
      this.request()

      let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
    console.log("userid"+this.userid)

this.geolocation.getCurrentPosition().then((position) => {
   console.log("position data"+JSON.stringify(position))
       loader.dismiss();
      console.log("current latitude "+JSON.stringify(position.coords.latitude))
       console.log("current longitute "+JSON.stringify(position.coords.longitude))
     
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
      let mapEle = document.getElementById('map3');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });


       google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
     
       // this.salonmarker();
       this.usermarker(position.coords.latitude,position.coords.longitude);

       this.currentposlat=position.coords.latitude;
       this.currentposlng=position.coords.longitude;
       this.DefaultRange(position.coords.latitude,position.coords.longitude);

    }, (err) => {
      console.log(err);
    });
  }

  
   ngOnInit(){
    

  }





   usermarker(a,b){

     if(a &&b ){

	let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: {lat:a, lng: b}, 
   // icon:'assets/icon/salon.png'
       });     
     }
   }


Range(){
	// alert(this.nearbyrange);
   let nearbylat=[];
   let nearbylng=[];
   let nearbyslname=[];
   let lt:number=0;
   let lg:number=0;
   let nm:number=0;
	this.userid;
    // this.userlat=this.currentposlat;
    // this.userlng= this.currentposlng;
    this.nearbyrange;
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
     var link='http://gagandeepsethi.com/salonDirectory/WebServices/nearDistance.json';
     var data=JSON.stringify({

     	     Userid: localStorage['customerid'],
     	     latitude:this.currentposlat,
     	     longitude:this.currentposlng,
     	     radius:this.nearbyrange
     });

     this.http.post(link,data)
     .map(res=>res.json())
     .subscribe(data=>{
       loader.dismiss().then(()=>{
              this.filterrange=data;
           console.log("filter data"+JSON.stringify(this.filterrange))

       for(let nearbydata of this.filterrange.saloninfo){

         nearbylat[lt]=nearbydata.latitude;
         nearbylng[lg]=nearbydata.longitude;
         nearbyslname[nm]=nearbydata.salonname;

 // console.log("near by lat lng"+JSON.stringify(nearbylat[lt]+' '+nearbylng[lg]))

         let nearbylatLng = new google.maps.LatLng(nearbylat[lt],nearbylng[lg]);


  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
      // position: {lat:a, lng: b}
    position: nearbylatLng,
    icon:'assets/icon/place.png'


       });     


   this.markers.push(marker);  
 
       }
     }),
                error =>
                      loader.dismiss().then(() => {
       let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loader.dismiss();
      alert.present()
      


     })
                        })

}
request(){
this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if(canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            console.log('Request successful.')
            // alert("request Success")
          },
          error => {
            console.log('Error requesting location permissions', error)
             // alert("request fail")
            
          }
        );
      }
    });
}
DefaultRange(customer_lat,customer_lng){
    let nearbylat=[];
   let nearbylng=[];
   let nearbyslname=[];
   let lt:number=0;
   let lg:number=0;
   let nm:number=0;
  this.userid;
    // this.userlat=this.currentposlat;
    // this.userlng= this.currentposlng;
    this.nearbyrange;
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
     var link='http://gagandeepsethi.com/salonDirectory/WebServices/nearDistance.json';
     var data=JSON.stringify({

            Userid: localStorage['customerid'],
            latitude:customer_lat,
            longitude:customer_lng,
            radius:25
     });

     this.http.post(link,data)
     .map(res=>res.json())
     .subscribe(data=>{
       loader.dismiss().then(()=>{
              this.filterrange=data;
           console.log("filter data"+JSON.stringify(this.filterrange))

       for(let nearbydata of this.filterrange.saloninfo){

         nearbylat[lt]=nearbydata.latitude;
         nearbylng[lg]=nearbydata.longitude;
         nearbyslname[nm]=nearbydata.salonname;

 console.log("near by lat lng"+JSON.stringify(nearbylat[lt]+' '+nearbylng[lg]))

         let nearbylatLng = new google.maps.LatLng(nearbylat[lt],nearbylng[lg]);


  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
      // position: {lat:a, lng: b}
    position: nearbylatLng,
    icon:'assets/icon/place.png'


       });     


   this.markers.push(marker);  
 
       }
     }),
                error =>
                      loader.dismiss().then(() => {
       let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loader.dismiss();
      alert.present()
      


     })
                        })
}

}
