import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
declare var google
/**
 * Generated class for the SalonAddressDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-address-details',
  templateUrl: 'salon-address-details.html',
})
export class SalonAddressDetails {
  // street='Bahadurke Road'
  // city='Ludhiana'
  // postcode=141008
  lng
  lat
  http
  place
  fulladdress
  sublocality
  state
  country
  postalcode
  map:any;
  city;
  district
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 http:Http,public viewCtrl: ViewController) {
    this.http=http;
    this.lat=this.navParams.get('lat')
  	this.lng=this.navParams.get('lng')

  }

  ngOnInit(){
	console.log("details"+this.lat)
	console.log("details"+this.lng)
this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.lng+'&key=AIzaSyBbF06Yti3oXfKuVANv2o8fKvue86cBMz0')
.map(response => response.json())
.subscribe(getplaceData => {
        
            this.place= getplaceData;
            this.fulladdress=this.place.results[0].formatted_address;
            this.city=this.place.results[0].address_components[0].long_name;
            this.sublocality=this.place.results[0].address_components[1].long_name;
            this.district=this.place.results[0].address_components[2].long_name;
            this.state=this.place.results[0].address_components[4].long_name;
            this.country=this.place.results[0].address_components[5].long_name;
            this.postalcode=this.place.results[3].address_components[0].long_name;
            // console.log("get details"+JSON.stringify(this.place))
            console.log("i got place id yeee " +  JSON.stringify(this.place['results'][0]['place_id']));
            console.log("i got place details  " +JSON.stringify(this.place.results[3].address_components[0].long_name));
     
        });

   this.loadmap()
}
loadmap(){


let mapEle = document.getElementById('map5');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:this.lat, lng:this.lng},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });

    this.loadmarker()
}
loadmarker(){

			let marker = new google.maps.Marker({
			 map: this.map,
			animation: google.maps.Animation.DROP,
	 position: {lat:this.lat, lng:this.lng}, 			    				   
						       });     
}
dismiss() {
        this.viewCtrl.dismiss({city:this.city,district:this.district,postalcode:this.postalcode});
    }
 // chooseItem(item: any) {
 //        // alert("item"+JSON.stringify(item))
 //        // console.log("item"+JSON.stringify(item))
 //        // console.log('modal > chooseItem > item > ', item);
 //        this.viewCtrl.dismiss(item);
 //    }
}
