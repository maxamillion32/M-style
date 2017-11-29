import { Component } from '@angular/core';

import {DataService } from "../../providers/data-service"
import { LoadingController,Events,AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable} from "rxjs/Rx";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FormControl,FormGroup,Validators, FormBuilder } from '@angular/forms';


/**
 * Generated class for the SalonOwnerProfile2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-owner-profile2',
  templateUrl: 'salon-owner-profile2.html',
})
export class SalonOwnerProfile2 {
leads
name
about_me
email
mobile_number
user_id;
minedata
 v=false;
 pic
 myimage
 form3:FormGroup
 userpic
  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,public formBuilder: FormBuilder,
  	public loadingCtrl: LoadingController,  private camera: Camera,
 private transfer: FileTransfer,public events: Events)
  {
 let name= /^([a-zA-Z ]){1,30}$/;
 let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

 this.form3 = formBuilder.group({ 

      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(name), Validators.required])],
     email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(emailRegex), Validators.required])],
     mobile_number :['', Validators.compose([Validators.maxLength(15),Validators.minLength(10),Validators.pattern("[0-9]*"), Validators.required])],
      

  });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonOwnerProfile2');
  }

  editprofile(){
    this.v=!this.v
  }

 uploadpic(a){
  if(a==2){
       this.pic='';        
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
   sourceType: 2,
    targetHeight:500,
  targetWidth:500,
  correctOrientation:true
}).then((imageData) => {
let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.pic= base64Image;
    
        this.saveimage(this.pic)
}, 
(err) => {

 // alert(JSON.stringify(err))
});              
         }
    // let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
    // ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
  else if(a==1){
        this.pic='';        
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
   sourceType: 1,
    correctOrientation:true
}).then((imageData) => {
let base64Image = 'data:image/jpeg;base64,' + imageData;
     
      this.pic= base64Image;
     
        this.saveimage(this.pic)
}, 
(err) => {

 // alert(JSON.stringify(err))
});  
  }
  //alert(this.pic)
 }
 




   ngOnInit(){
   let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.viewprofileinfo(this.user_id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        
                        this.minedata = data

                             this.name=this.minedata.saloninfo.full_name
                             this.email=this.minedata.saloninfo.email
                             this.about_me=this.minedata.saloninfo.salon_description
                             this.mobile_number=this.minedata.saloninfo.contact_number
                              this.myimage=this.minedata.saloninfo.profile_image

               if(this.myimage=='null' || this.myimage==null){
                    this.myimage='assets/img/user.jpg';
               }
               else{
 this.myimage='http://gagandeepsethi.com/salonDirectory/img/salonownerprofileimage/'+this.minedata.saloninfo.profile_image;
               }

        this.events.publish('user:created', localStorage['usertype'],
         localStorage['auth'],this.name,this.myimage,this.myimage);

console.log("hello pic hai ye"+JSON.stringify(this.myimage))
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

     editmyprofile(){

    let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.editprofileinfo(this.form3.controls['name'].value,this.about_me,this.form3.controls['email'].value,this.form3.controls['mobile_number'].value,this.user_id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                    	 this.leads = data
                    	if(this.leads.message =="your profile updated successfully"){
       let alert = this.alertCtrl.create({
    title: ' YOUR PROFILE UPDATED SUCCESSFULLY',
   
    buttons: ['Dismiss']
           });
         alert.present(); 
         this.v=false
         // this.navCtrl.setRoot('MySalonHome')       
         this.ngOnInit();      
           }}),
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

      saveimage(pic){ 
 
    var b =localStorage['salonid']

       let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();


      let options: FileUploadOptions = {
      fileKey: "profile_image",
      chunkedMode: false,
      mimeType: "image/jpg",
      fileName:'name.jpg',

         }
   
     const fileTransfer: FileTransferObject = this.transfer.create();
     fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/salonOwnerProfileImage/'+b+'.json',options)
      .then(data => { 
        loader.dismiss();
      
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Uploaded  Successfully',
               buttons: ['OK']
             });
                  
                  alert.present();
                 this.ngOnInit();
                 // this.navCtrl.push('MySalonHome')




         
      }),
 
  
       (err) => {
         // alert(JSON.stringify(err))
               loader.dismiss();
             }
       }

     }
