import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
declare var google
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { FormControl,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the SalonBuisnessInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-buisness-info',
  templateUrl: 'salon-buisness-info.html',
})
export class SalonBuisnessInfo {
     id
     mydata
     minedata
     mysalon_name
     myaddress
     mydescription
     mycontact_number
     salon_name
   
    salon_description
    website
    schedule_value
    parking_value
    contact_number
    leads
    v:boolean=false;
    schedule_array=[]
     ourdata
     mon
     tue
     wed
    thurs
    fri
    sat
    sun
fb
insta
wheelchair
wifi

    description;
    address:any = {
        place: '',
        set: false,
    };
    placesService:any;
    map: any;
    markers = [];
placedetails: any;


 http;
   userlat
   userlng
city
savebtn
district
postalcode
  splitted2
  splitted1
splitted3
splitted4
splitted5
splitted6
splitted7
splitted22
  splitted11
splitted33
splitted44
splitted55
splitted66
splitted77
a
lat
lng
ress
fulladdress
form3:FormGroup
  constructor(public navCtrl: NavController,
    private dataservice :DataService,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private locationAccuracy: LocationAccuracy,
    private geolocation: Geolocation,
  	public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,public formBuilder: FormBuilder) {
 let name= /^([a-zA-Z ]){2,30}$/;
 let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

 this.form3 = formBuilder.group({ 

     mysalon_name: ['', Validators.compose([  Validators.required])],
     fulladdress: ['', Validators.compose([  Validators.required])],
    mycontact_number :['', Validators.compose([Validators.maxLength(15),Validators.minLength(10),Validators.pattern("[0-9]*"), Validators.required])],

  mydescription :['', Validators.compose([ Validators.required])],
  });





    this.savebtn='false'
    this.id=localStorage['salonid'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonBuisnessInfo');
  }
  editprofile(){
this.v=!this.v

   this.savebtn='true'

  }
ngOnInit(){
  this.request()
      // this.initMap();
        // this.initPlacedetails();
     this.currentlocation()
let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.viewbusinessinfo(this.id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.minedata = data
                  this.mysalon_name=this.minedata.saloninfo.salon_name
                 this.fulladdress=this.minedata.saloninfo.address
              this.district=this.minedata.saloninfo.city
               this.postalcode=this.minedata.saloninfo.post_code
               this.mydescription=this.minedata.saloninfo.salon_description
                  this.mycontact_number=this.minedata.saloninfo.contact_number
                this.website=this.minedata.saloninfo.website
               this.schedule_value=this.minedata.saloninfo.schedule
               this.parking_value=this.minedata.saloninfo.parking
             this.fb =this.minedata.saloninfo.facebooklink
           this.insta=this.minedata.saloninfo.instagramlink
                   this.wheelchair=this.minedata.saloninfo.wheelchair
               this.wifi=this.minedata.saloninfo.wifi
           // alert('wifi value'+this.wifi)
           //       alert('whelchair value'+this.wheelchair)
                   
                        // console.log('hi'+this.mydata.saloninfo.salon_name)
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
        
                    );
}

        save(){
        let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data =>this.dataservice.postbusinessinfo(this.userlat,
           this.userlng,
           this.mysalon_name,this.fulladdress,this.district,this.postalcode,
           this.mydescription,
           this.mycontact_number,this.website,this.parking_value,
           this.schedule_value,this.id,this.fb,this.insta,
           this.wheelchair,this.wifi))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                    	 this.leads = data
                    if(this.leads.message =="your profile updated successfully"){
              let alert = this.alertCtrl.create({
         title: 'BUSINESS INFORMATION UPDATED SUCCESSFULLY',
   
        buttons: ['Dismiss']
        });
        alert.present();   
                  
             }
             this.v=false
            this.navCtrl.pop(); }),
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

    


//  showModal() {
//         // reset 
//         this.reset();
//         // show modal|
//         let modal = this.modalCtrl.create('ModalAutocompleteItems');
//         modal.onDidDismiss(data => {
//             console.log('page > modal dismissed > data > ', data);
//             if(data){
//                 this.address.place = data.description;
//                 // get details
//                 this.getPlaceDetail(data.place_id);
//             }                
//         })
//         modal.present();
// }
  // private reset() {
  //       this.initPlacedetails();
  //       this.address.place = '';
  //       this.address.set = false;
  //   }

//  private getPlaceDetail(place_id:string):void {
//         var self = this;
//         var request = {
//             placeId: place_id
//         };
//         this.placesService = new google.maps.places.PlacesService(this.map);
//         this.placesService.getDetails(request, callback);
//         function callback(place, status) {
//             if (status == google.maps.places.PlacesServiceStatus.OK) {
//                 console.log('page > getPlaceDetail > place > ', place);
//                 // set full address
//                 self.placedetails.address = place.formatted_address;
         

//                 self.placedetails.lat = place.geometry.location.lat();
//                 self.placedetails.lng = place.geometry.location.lng();
//                 for (var i = 0; i < place.address_components.length; i++) {
//                     let addressType = place.address_components[i].types[0];
//                     let values = {
//                         short_name: place.address_components[i]['short_name'],
//                         long_name: place.address_components[i]['long_name']
//                     }
//                     if(self.placedetails.components[addressType]) {
//                         self.placedetails.components[addressType].set = true;
//                         self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
//                         self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
//                     }                                     
//                 }                  
//                 // set place in map
//                 self.map.setCenter(place.geometry.location);
//                 // self.createMapMarker(place);
//                 // populate
//                 self.address.set = true;
//                 console.log('page > getPlaceDetail > details > ', self.placedetails);
//             }else{
//                 console.log('page > getPlaceDetail > status > ', status);
//             }
//         }
// }

//  private initMap() {
//         var point = {lat: -34.603684, lng: -58.381559}; 
//         let divMap = (<HTMLInputElement>document.getElementById('map'));
//         this.map = new google.maps.Map(divMap, {
//             center: point,
//             zoom: 15,
//             disableDefaultUI: true,
//             draggable: false,
//             zoomControl: true
//         });
// }


 // private createMapMarker(place:any):void {
 //        var placeLoc = place.geometry.location;
 //        var marker = new google.maps.Marker({
 //          map: this.map,
 //          position: placeLoc
 //        });    
 //        this.markers.push(marker);
 //    }

    // private initPlacedetails() {
    //     alert(JSON.stringify(this.placedetails))
    //     this.placedetails = {
    //         address: '',
    //         lat: '',
    //         lng: '',
    //         components: {
    //             route: { set: false, short:'', long:'' },                           // calle 
    //             street_number: { set: false, short:'', long:'' },                   // numero
    //             sublocality_level_1: { set: false, short:'', long:'' },             // barrio
    //             locality: { set: false, short:'', long:'' },                        // localidad, ciudad
    //             administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
    //             administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
    //             country: { set: false, short:'', long:'' },                         // pais
    //             postal_code: { set: false, short:'', long:'' },                     // codigo postal
    //             postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
    //         }    
    //     };        
    // }    

currentlocation(){

  this.geolocation.getCurrentPosition().then((resp) => {
        console.log("helo lat"+resp.coords.latitude)
         console.log("hello lng"+resp.coords.longitude)

         this.userlat=resp.coords.latitude;
         this.userlng=resp.coords.longitude;
          
     })

}

// showAddress(){
//      let profileModal = this.modalCtrl.create('SalonAddressDetails', {lat:this.userlat,lng:this.userlng});
//      profileModal.onDidDismiss(data => {
//      console.log("data"+JSON.stringify(data));
//      this.city=data.city;
//      this.district=data.district;
//      this.postalcode=data.postalcode;
//    });
//    profileModal.present();
//   // this.navCtrl.push('SalonAddressDetails',{lat:this.userlat,lng:this.userlng})
// }
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

schedule_page(){

                   
                  let modal =this.modalCtrl.create('SalonSchedule')
                  modal.present();
                  modal.onDidDismiss(data =>{
                        this.ourdata=data
                          this.mon=(this.ourdata.mon)
                          // alert("Mond"+this.mon)
                                      this.tue=this.ourdata.tue
                                      // alert("Tues"+this.tue)
                                        console.log('hiii'+JSON.stringify(this.tue))
                                      this.wed= this.ourdata.wed
                                      this.thurs=this.ourdata.thu
                                      this.fri=this.ourdata.fri
                                      this.sat= this.ourdata.sat
                                      this.sun=this.ourdata.sun
                                if(!this.mon ||this.mon==""){
                                  // alert('jio44')
                                  // alert(this.mon)
                                  this.mon=""
                                  // alert("mondat"+this.mon)
                             // this.splitted1 = this.mon.split("-");
                             //       alert(this.splitted1[0])
                               // this.mon='Monday'+' '+ this.splitted1[0]+this.splitted1[1]
                                }
                               else{
                                     this.splitted1 = this.mon.split("-");
                             //       alert(this.splitted1[0])
                               this.mon='Monday'+' '+ this.splitted1[0]+'-'+this.splitted1[1]
                                    }

                                 if(!this.tue||this.tue==""){
                                         this.tue=""
                                       }
                                       else{
                                    this.splitted2 = this.tue.split("-");
                                      // alert(this.splitted2[0])
                               this.tue='Tuesday'+' '+this.splitted2[0]+'-'+this.splitted2[1]
                                 // alert("Tue"+this.tue)
                                }
                                      if(!this.wed || this.wed==""){
                                  this.wed=""
                                }else{
                                   this.splitted3 = this.wed.split("-");
                                      this.wed= 'Wednesday'+' '+this.splitted3[0]+'-'+this.splitted3[1]
                                    }
                                 if(!this.thurs ||this.thurs==""){
                                  this.thurs=""
                                }
                                else{   this.splitted4 = this.thurs.split("-");
                                      this.thurs='Thursday'+' '+this.splitted4[0]+'-'+this.splitted4[1]
                                         }

                                         if(!this.fri||this.fri==""){
                                                 this.fri=""
                                         }

                                else{
                                  this.splitted5 = this.fri.split("-");
                                      this.fri="Friday"+' '+this.splitted5[0]+'-'+this.splitted5[1]
                                    }
                                   if(!this.sat||this.sat==""){
                                                 this.sat=""
                                         }

                                else{
                                  this.splitted6 = this.sat.split("-");
                                      this.sat= "Saturday"+' '+this.splitted6[0]+'-'+this.splitted6[1]
                                    }
                                         if(!this.sun||this.sun==""){
                                  this.sun=""
                                }else{
                                    this.splitted7 = this.sun.split("-");
                                      this.sun="Sunday"+' '+this.splitted7[0]+'-'+this.splitted7[1]
                                 // alert(this.thurs)
                                         }
                // if(this.mon!=""){
                //   this.splitted1 = this.mon.split("-");
                
                //            // this.splitted11=this.splitted1[1].split(",") 
                //          }
                //   if(this.tue!=""){
       
                //        this.splitted2 = this.tue.split("-"); 
                //       // alert("12")
                //        // this.splitted22=this.splitted2[1].split(",")
                //      }
                //      if(this.wed!=""){
                //          this.splitted3 = this.wed.split("-"); 
                //          // this.splitted33=this.splitted3[1].split(",") 
                //        }
                //              if(this.thurs!=""){
                //           this.splitted4 = this.thurs.split("-");  
                //           // this.splitted44=this.splitted4[1].split(",")
                //                   }

                //                    // if(this.fri!=""){
                //           this.splitted5 = this.fri.split("-"); 
                //           this.splitted55=this.splitted5[1].split(",")
                //                 // }
                //                  // if(this.sat!=""){
                //            this.splitted6=this.sat.split("-") 
                //            this.splitted66=this.splitted6[1].split(",")
                //          // }
                //                  // if(this.sun!=""){
                //             this.splitted7 = this.sun.split("-");  
                //             this.splitted77=this.splitted7[1].split(",")
                // }
                               
//  if(this.splitted11[0]=='undefined'){

//  this.mon="";

// }                              
//   if(this.splitted22[0]=='undefined'){
// alert('uu')
//  this.tue="";

// } 
// if(this.splitted33[0]=='undefined'){

//  this.wed="";

// } 
// if(this.splitted44[0]=='undefined'){

//  this.thurs="";

// } 
// if(this.splitted55[0]=='undefined'){

//  this.fri="";

// } 
// if(this.splitted66[0]=='undefined'){

//  this.sat="";

// }                  

// if(this.splitted77[0]=='undefined'){

//  this.sun="";

// } 

             this.schedule_value= this.mon+this.tue+
this.wed +this.thurs+ this.fri+this.sat+this.sun
//               // alert(this.schedule_value) 
              //           alert(JSON.stringify(this.ourdata))
                        this.schedule_array.push(this.ourdata.mon)
                        this.schedule_array.push(this.ourdata.tue)
                        this.schedule_array.push(this.ourdata.wed)
                        this.schedule_array.push(this.ourdata.thu)
                        this.schedule_array.push(this.ourdata.fri)
                          this.schedule_array.push(this.ourdata.sat)
                          this.schedule_array.push(this.ourdata.sun)
                          console.log(JSON.stringify(this.schedule_array))

                  })




                  }

pickAddress(){
     let profileModal = this.modalCtrl.create('Clientlocation', {bidlat1:this.userlat,bidlng1:this.userlng});
     profileModal.onDidDismiss(data => {
     console.log("data"+JSON.stringify(data));
         this.fulladdress=data.address;
         this.userlat=data.lat;
         this.userlng=data.lng;
   });
   profileModal.present();
  // this.navCtrl.push('SalonAddressDetails',{lat:this.userlat,lng:this.userlng})
}



             }
