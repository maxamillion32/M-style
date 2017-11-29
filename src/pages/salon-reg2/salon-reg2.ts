import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var google
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
/**
 * Generated class for the SalonReg2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-reg2',
  templateUrl: 'salon-reg2.html',
})
export class SalonReg2 {
  name;
  email;
  password;
  cpass;
  number;
    buisnessaddress
   http;
  data;
  items;
  salonname;
  salonaddress;
  salondescription;
  buisnessname;
  check;
businessadd
    description;
    address:any = {
        place: '',
        set: false,
    };
    placesService:any;
    map: any;
    markers = [];
placedetails: any;
 ad
 custregister:FormGroup;
 services_selected
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public navParams: NavParams,http:Http,
    private alertCtrl: AlertController,public modalCtrl: ModalController,
    public  loadingCtrl:LoadingController) {
    this.data={}
    this.http=http;
// this.ad='false'
       
            
             // alert("salonname"+this.salonname)
let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let numberregex=/^\d+$/;
let name= /^([a-zA-Z ]){1,30}$/;
              this.custregister = formBuilder.group({
          

  buisnessname: ['', Validators.compose([Validators.required])],




aboutbuisness: ['', Validators.compose([Validators.required])],

fullname: ['', Validators.compose([Validators.pattern(name),Validators.required])],

salonemail: ['', Validators.compose([Validators.pattern(emailRegex), Validators.required])],

// services_selected:['', Validators.compose([Validators.required])],
         

   salonpassword:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],

    saloncpass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],
      
salonphone: ['', Validators.compose([Validators.minLength(10),Validators.maxLength(15),Validators.pattern(numberregex),Validators.required])],

    });

  }

  



  Confirmation(){
    let alert = this.alertCtrl.create({
    title: 'Confirm',
    message: 'Are you want to Create Buisness Account?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.reg()
        }
      }
    ]
  });
  alert.present();

  }


   ngOnInit() {
        this.initMap();
        this.initPlacedetails();
}

 showModal() {
        // reset 
        this.reset();
        // show modal|
        let modal = this.modalCtrl.create('ModalAutocompleteItems');
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                this.address.place = data.description;
                // get details
                this.getPlaceDetail(data.place_id);
            }                
        })
        modal.present();
}




  private reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    }

 private getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
         

                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }                                     
                }                  
                // set place in map
                self.map.setCenter(place.geometry.location);
                // self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
}

 private initMap() {
        var point = {lat: -34.603684, lng: -58.381559}; 
        let divMap = (<HTMLInputElement>document.getElementById('map'));
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true
        });
}
 private createMapMarker(place:any):void {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeLoc
        });    
        this.markers.push(marker);
    }

    private initPlacedetails() {



        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },                           // calle 
                street_number: { set: false, short:'', long:'' },                   // numero
                sublocality_level_1: { set: false, short:'', long:'' },             // barrio
                locality: { set: false, short:'', long:'' },                        // localidad, ciudad
                administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
                administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
                country: { set: false, short:'', long:'' },                         // pais
                postal_code: { set: false, short:'', long:'' },                     // codigo postal
                postal_code_suffix: { set: true, short:'', long:'' },              // codigo postal - sufijo
            }    
        }; 

    }    


  reg(){

    
     if(this.custregister.controls["salonpassword"].value!=this.custregister.controls["saloncpass"].value ) {
      let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Password or confirm password Must be Same.',
                        buttons: ['OK']
                    });
                    alert.present();
     }
else {
          // alert("hello"+this.placedetails.address)


          if(this.placedetails.address==''){
               
               // this.ad='true'
            let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please Select Address',
                        buttons: ['OK']
                    });
                    alert.present();

          }
         else if(this.check=='true'|| this.check==true){
           let loading = this.loadingCtrl.create({
       content: 'Please wait...'
      });

       loading.present();
  	    var link='http://gagandeepsethi.com/salonDirectory/WebServices/salonRegistration.json';
        var data=JSON.stringify({
            salon_name:this.salonname,
            address:this.placedetails.address,
            full_name:this.name,
            email:this.email,
            password:this.password,
            confirm_password:this.cpass,
            contact_number:this.number,
           salon_description:this.salondescription,
            usertype:1,
            latitude: this.placedetails.lat,
            longitude:this.placedetails.lng,
            category:this.services_selected

        })

    this.http.post(link,data)
    .map(response => response.json())
     .subscribe(data=>{

           loading.dismiss();
       this.data = data;
         console.log("response"+JSON.stringify(this.data));
           if(this.data.status==1){
            
               let alert = this.alertCtrl.create({
                title: 'THANK YOU!',
                subTitle: 'Registration Successful.Please Check Your Inbox To Verify Your Account ',
                buttons: ['ok']
              });
              alert.present();
                      
              this.navCtrl.setRoot('Login')
           } 
           else if(this.data.message=='Entered email address or username is already registered with us.'){
              
               let alert = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Entered E-mail is already registered',
                buttons: ['ok']
              });
              alert.present();
           }     
     });

           }

         else{

             let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please read and accept terms & conditions.',
                        buttons: ['OK']
                    });
                    alert.present();


         }


  }
}

  show_category_modal(){

   let modal =this.modalCtrl.create('SalonCategory')
                  modal.present();
                  modal.onDidDismiss(data =>{
                    // alert(data)
                             this.services_selected=data.services
                             // alert(this.services_selected)

})
}

terms(){
    this.navCtrl.push('TermsOfServices')
}
}