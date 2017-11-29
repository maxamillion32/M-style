import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
declare var google
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the ModalAutocompleteItems page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-autocomplete-items',
  templateUrl: 'modal-autocomplete-items.html',
})
export class ModalAutocompleteItems {
	autocompleteItems: any;
    autocomplete: any;
    acService:any;
    placesService: any;
    bidlat;
    bidlng;
    bidlat1;
    bidlng1;
    point
    map: any;
    markers = [];
  constructor(public navCtrl: NavController, private geolocation: Geolocation,public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAutocompleteItems');
  }

 ngOnInit() {
        this.acService = new google.maps.places.AutocompleteService();        
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };    
        this.CurrentlocationMap();    
    }


 dismiss() {
        this.viewCtrl.dismiss();
    }


      chooseItem(item: any) {
        console.log('modal > chooseItem > item > ', item);
        this.viewCtrl.dismiss(item);
}


    updateSearch() {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let self = this;
        let config = { 
            types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query, 
            // componentRestrictions: { country: 'AR' } 
        }
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];            
            predictions.forEach(function (prediction) {              
                self.autocompleteItems.push(prediction);
            });
        });
}

CurrentlocationMap(){
     this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.bidlat1=position.coords.latitude
          this.bidlng1=position.coords.longitude
       this.point = {lat:position.coords.latitude, lng:position.coords.longitude}; 
          let divMap = (<HTMLInputElement>document.getElementById('map6'));
        this.map = new google.maps.Map(divMap, {
            center:this.point,
            zoom: 10,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        var marker = new google.maps.Marker({
          map: this.map,
          position:this.point
        });    

        
        this.markers.push(marker);
    }, (err) => {
      console.log(err);
    });
       
}


}
