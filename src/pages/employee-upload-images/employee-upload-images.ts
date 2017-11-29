import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
 ActionSheetController,AlertController,LoadingController } from 'ionic-angular';
 import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Events } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@IonicPage()
@Component({
  selector: 'page-employee-upload-images',
  templateUrl: 'employee-upload-images.html',
})
export class EmployeeUploadImages {
pic
resdata
http;
data
viewimage
uploadpics
noimage
deleteresponse
iconshow
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  	public actionSheetCtrl: ActionSheetController,
  	public alertCtrl:AlertController,
  	public loadingCtrl:LoadingController,
  	private camera: Camera, 
  	private file: File, http: Http,
    private transfer: FileTransfer) {

    this.iconshow='false' 
  	this.http = http;
     this.data = {};
  }
presentActionSheet(){
	let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source!',
      buttons: [
        {
          text: 'Camera',
          icon:'camera',
          handler: () => {
            this.uploadpic(1);
            console.log('Camera clicked');
          }
        },{
          text: 'Gallery',
          icon:'images',
          handler: () => {
            this.uploadpic(2);
            console.log('Gallery clicked');
          }
        },{
          text: 'Cancel',
          icon:'close-circle',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

 uploadpic(a){
if(a==2){
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false,
targetHeight:500,
targetWidth:500,
correctOrientation:true
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic=base64Image;
 var b=localStorage['employeeid']
this.upload(b);
}, (err) => {
console.log('Camera is not Working')
})
// let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
// ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
}else if(a==1){
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false,
targetHeight:500,
targetWidth:500,
correctOrientation:true
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic= base64Image;
   var a=localStorage['employeeid']
this.upload(a);
}, (err) => {
console.log('Camera is not Working')
})
}
 } 

 upload(user_id:number){
 	     console.log(this.pic)
          var b=user_id;

          // alert("employee id"+b)
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

          let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "employee_previous_work_image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: FileTransferObject  = this.transfer.create();
          fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/employeePreviousWorkImageUpload/'+b+'.json',options)
         
       
          .then(data => {
         this.resdata=data;
              this.noimage=false
             loader.dismiss();
 let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Uploaded Successfully',
               buttons: ['OK']
             });
             alert.present();
              this.ngOnInit();
              
               this.iconshow='false' 




      })

           , (err) => {
               loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Error!',
               subTitle: 'Try Again!',
               buttons: ['OK']
             });
             alert.present();


           
           }

 }
 ngOnInit(){
	
let loader = this.loadingCtrl.create({
content: "Please wait..."
});
loader.present();
var link = 'http://gagandeepsethi.com/salonDirectory/WebServices/employeePreviousWorkImageShow.json';
var data = JSON.stringify({
employee_id:localStorage['employeeid']    
});
this.http.post(link, data)
.map(response => response.json())
.subscribe(data => {
loader.dismiss();
this.viewimage = data;
console.log(JSON.stringify(this.viewimage.status))
     this.uploadpics=this.viewimage.image;


     if(this.viewimage.status==0){
            this.noimage=true;
     }
     
         
error => {
}   
});
} 

Delete(imagedelete){
  // alert(imagedelete)
  let loader = this.loadingCtrl.create({
content: "Please wait..."
});
loader.present();
var link = 'http://gagandeepsethi.com/salonDirectory/WebServices/deleteEmployeePreviousWorkImageByNameId.json';
var data = JSON.stringify({
id:localStorage['employeeid'],
image:imagedelete   
});
this.http.post(link, data)
.map(response => response.json())
.subscribe(data => {
loader.dismiss();
this.deleteresponse = data;  
   if(this.deleteresponse.status==1){
     let alert = this.alertCtrl.create({
               title: 'Alert!',
               subTitle: 'Image Deleted Successfully',
               buttons: ['OK']
             });
             alert.present();
             this.ngOnInit();

   }

error => {
}   
});
}
showicons(){
  this.iconshow='true'
}
}
