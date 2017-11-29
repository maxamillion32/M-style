import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google

import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { LocationAccuracy } from '@ionic-native/location-accuracy';

/**
 * Generated class for the UserCurrentLocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-current-location',
  templateUrl: 'user-current-location.html',
})
export class UserCurrentLocation {
map:any;
markers=[];
userlat:any;
userlng:any;
http;
place
  constructor(public navCtrl: NavController,
   http:Http,public navParams: NavParams,
   private locationAccuracy: LocationAccuracy,
  	private geolocation: Geolocation) {
    this.http=http;
  }

  ngOnInit(){
      this.request()
          this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude)
         console.log(resp.coords.longitude)

         this.userlat=resp.coords.latitude;
         this.userlng=resp.coords.longitude;
                     


   let mapEle = document.getElementById('map1');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:resp.coords.latitude, lng: resp.coords.longitude},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });

             google.maps.event.addListenerOnce(this.map, 'idle', () => {
             mapEle.classList.add('show-map');
             google.maps.event.trigger(mapEle, 'resize');
              });
                   
						let marker = new google.maps.Marker({
					    map: this.map,
					    animation: google.maps.Animation.DROP,
					    position: {lat:resp.coords.latitude, lng: resp.coords.longitude}, 	
					      title: 'Uluru (Ayers Rock)'				   
					       });     
		

           marker.addListener('click', ()=> {
               
                  infowindow.open(this.map, marker);

             });

              var infowindow = new google.maps.InfoWindow({
               content: 'My Location'
                });
       
                 })

  

    
   this.getdetails()
                
       }
getdetails(){
this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=30.9521287,75.84757400000001&key=AIzaSyBbF06Yti3oXfKuVANv2o8fKvue86cBMz0")
.map(response => response.json())
.subscribe(getplaceData => {
        
            this.place= getplaceData;
            // console.log("get details"+JSON.stringify(this.place))
            // console.log("i got place id yeee " +  JSON.stringify(this.place['results'][0]['place_id']));
            // console.log("i got place details  " +JSON.stringify(this.place.results[3].address_components[0].long_name));
     
        });
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

}
