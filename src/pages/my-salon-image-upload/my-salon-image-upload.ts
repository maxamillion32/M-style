import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ActionSheetController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the MySalonImageUpload page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-image-upload',
  templateUrl: 'my-salon-image-upload.html',
})
export class MySalonImageUpload {
pic:string;
myImage
 results
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private transfer: FileTransfer, 
    private file: File,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySalonImageUpload');
  }



showsheet(){
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Pick an option',
     buttons: [
       {
         text: 'Upload from Camera',
         role: 'destructive',
         handler: () => {
                 
        this.pic='';      	
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
   sourceType: 1,
   correctOrientation:true
}).then((imageData) => {

      // alert(imageData)
      this.pic= 'data:image/jpeg;base64,' +imageData;
      // alert("camera"+this.pic)
        this.saveimage(this.pic)
}, 
(err) => {

 // alert(JSON.stringify(err))
});             
  }
       },
       {
         text: 'Select From gallery',
         handler: () => {
          this.pic='';        
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
   sourceType: 2,
   correctOrientation:true
}).then((imageData) => {
let base64Image = 'data:image/jpeg;base64,' + imageData;
      // alert(base64Image)
      this.pic= base64Image;
      // alert("galery"+this.pic)
        this.saveimage(this.pic)
}, 
(err) => {

 // alert(JSON.stringify(err))
});              
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

    showsheet2(){
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Pick an option',
     buttons: [
       {
         text: 'Upload from Camera',
         role: 'destructive',
         handler: () => {
                 
        this.pic='';      	
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
   sourceType: 1
}).then((imageData) => {

      // alert(imageData)
      this.pic= 'data:image/jpeg;base64,'+imageData;
    this.saveimageToGallery(this.pic)

       
}, 
(err) => {

 // alert(JSON.stringify(err))
});             
  }
       },
       {
         text: 'Select From gallery',
         handler: () => {
          this.pic='';        
     this.camera.getPicture({
  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
   sourceType: 2,
     correctOrientation:true
}).then((imageData) => {
let base64Image = 'data:image/jpeg;base64,' + imageData;
      // alert(base64Image)
      this.pic= base64Image;
      // alert("galery"+this.pic)
        this.saveimageToGallery(this.pic)
}, 
(err) => {

 // alert(JSON.stringify(err))
});              
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

saveimage(pic){ 
	// alert(pic)
  var b =localStorage['salonid']
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();


 let options: FileUploadOptions = {
      fileKey: "salon_image",
      chunkedMode: false,
      mimeType: "image/jpg",
      fileName:'name.jpg',

  }

const fileTransfer: FileTransferObject = this.transfer.create();

  fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/salonImage/'+b+'.json',options)
 .then(data => { 
        loader.dismiss();
      
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Uploaded Successfully',
               buttons: ['OK']
             });
             alert.present();
this.navCtrl.push('SalonImageGallery')
         
      }),


       (err) => {
         // alert(JSON.stringify(err))
               loader.dismiss();
             }
         }



       saveimageToGallery(pic){  
         // alert('insde save func')
         //     alert(pic)
     var b =localStorage['salonid']
         let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
           loader.present();


       let options: FileUploadOptions = {
      fileKey: "gallery_image",
      chunkedMode: false,
      mimeType: "image/jpg",
      fileName:'name.jpg',

        }

         const fileTransfer: FileTransferObject = this.transfer.create();
         fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/salonGalleryImage/'+b+'.json',options)
         .then(data => { 
           loader.dismiss();
      
              let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Saved To Gallery Successfully',
               buttons: ['OK']
             });
             alert.present();
            this.navCtrl.push('SalonImageGallery')
         
             }),


             (err) => {
              // alert(JSON.stringify(err))
               loader.dismiss();
             }
        } 

gallery_open(){
  
  this.navCtrl.push('SalonImageGallery')
 

}

     }

 







