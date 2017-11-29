import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
declare var google:any;
/**
 * Generated class for the Clientlocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clientlocation',
  templateUrl: 'clientlocation.html',
})
export class Clientlocation {
  checked
searchbox
bidlat1
bidlng1
locationaddress
bidlat
bidlng
amap;
mylatlng;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
   public navParams: NavParams) {
  	this.bidlat1=this.navParams.get('bidlat1')
    this.bidlng1=this.navParams.get('bidlng1')
  }
ionViewDidLoad() {
    console.log('ionViewDidLoad Maplo');
    this.initMap()
    this.addmarker()
  }
  initMap()
  {
 
  	  this.amap = new google.maps.Map(document.getElementById('mapsearch'), {
          center: {lat:this.bidlat1, lng:this.bidlng1},
          zoom: 13
        });
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        // var input=this.searchbox
        console.log("input"+input)
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        this.amap.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', this.amap);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: this.amap,
          anchorPoint: new google.maps.Point(0, -29),
            disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP  
        });

        autocomplete.addListener('place_changed', ()=> {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            this.amap.fitBounds(place.geometry.viewport);
          } else {
            this.amap.setCenter(place.geometry.location);
            this.amap.setZoom(15);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
 console.log("hello place"+JSON.stringify(place.address_components))
console.log("hello place"+JSON.stringify(place))
this.locationaddress=address
this.bidlat=place.geometry.location.lat()
this.bidlng=place.geometry.location.lng()
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(this.amap, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        // setupClickListener('changetype-establishment', ['establishment']);
        // setupClickListener('changetype-geocode', ['geocode']);

        // document.getElementById('use-strict-bounds')
        //     .addEventListener('click', function() {
        //       console.log('Checkbox clicked! New state=' + this.checked);
        //       autocomplete.setOptions({strictBounds: this.checked});
        //     });
  }
  addmarker()
  {

this.mylatlng={lat:this.bidlat1,lng:this.bidlng1}
// alert(JSON.stringify(this.mylatlng))
  	  var marker = new google.maps.Marker({
          map: this.amap,
          position:this.mylatlng 
        });

  }

dismiss(){
	this.viewCtrl.dismiss({address:this.locationaddress,lat:this.bidlat,lng:this.bidlng});
}
}
