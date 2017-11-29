import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Events } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop';
/**
 * Generated class for the EmployeeViewEditProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-view-edit-profile',
  templateUrl: 'employee-view-edit-profile.html',
})
export class EmployeeViewEditProfile {
  edit;
  userid;
  http;
  viewinfo;
  data;
  username;
  email;
  number;
  address;
  editinfo;
  pic;
  picres;
  customerpic;
  employeeid;
  custregister:FormGroup;
   disableStatus:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private transfer: FileTransfer, 
  	public loadingCtrl: LoadingController,
    public events: Events,
    private file: File,
    public formBuilder: FormBuilder,
    private crop: Crop,
    http:Http) {

  	   this.data={}
  	this.edit='false'
   	this.http=http;

   	 this.employeeid=localStorage['employeeid']
       let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let name= /^([a-zA-Z ]){1,30}$/;
    let numberregex=/^\d+$/;
    // let number=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        this.custregister = formBuilder.group({
          

 username: ['', Validators.compose([Validators.pattern(name),Validators.required])],
 // useraddress: ['', Validators.compose([Validators.pattern(name),Validators.required])],
    
       useremail: ['', Validators.compose(
         [Validators.pattern(emailRegex), Validators.required])],
usernumber: ['', Validators.compose([Validators.minLength(10),Validators.maxLength(15),Validators.pattern(numberregex),Validators.required])],

    });

  }

 ngOnInit(){
  	let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  var link='http://gagandeepsethi.com/salonDirectory/WebServices/employeeViewProfile.json';
	var data=JSON.stringify({

		employee_id:this.employeeid,
	

	})

	this.http.post(link,data)
	 .map(response => response.json())
     .subscribe(data=>{
       loading.dismiss();
        
       this.viewinfo = data;
         console.log("response"+JSON.stringify(this.viewinfo));
			  this.username=this.viewinfo.employeedata.full_name;
			               this.email=this.viewinfo.employeedata.email;
			                this.number=this.viewinfo.employeedata.contact_number;
			                
                 this.customerpic=this.viewinfo.employeedata.profile_image;


               if(this.customerpic=='null' || this.customerpic==null){
                    this.pic='assets/img/user.jpg';
               }
               else{
                 this.pic='http://gagandeepsethi.com/salonDirectory/img/employeeprofileimage/'+this.viewinfo.employeedata.profile_image;
               }

        this.events.publish('user:created', localStorage['usertype'],
         localStorage['auth'],this.username,this.pic,this.pic);

//console.log("hello pic hai ye"+JSON.stringify(this.customerpic))
               
     });
  }

  
update(){
   this.edit='true';
}
save(){
        


     let loading = this.loadingCtrl.create({
    content: 'Please wait...'
         });

  loading.present();
  var link='http://gagandeepsethi.com/salonDirectory/WebServices/employeeProfileEdit.json';
	var data=JSON.stringify({

		employee_id:this.employeeid,
	     full_name:this.username,
	     email:this.email,
	     contact_number:this.number,
	     

	})

	this.http.post(link,data)
	 .map(response => response.json())
     .subscribe(data=>{
       loading.dismiss();
        
       this.editinfo = data;
       this.edit='false';
       console.log("edit res"+JSON.stringify(this.editinfo))


             if(this.editinfo.message=='your profile updated successfully'){
             	 
				let alert = this.alertCtrl.create({
						    title: 'ALERT!',
						    subTitle: 'Profile Updated Successfully',
						    buttons: ['ok']
						  });
						  alert.present();
                      }
             
       this.ngOnInit();
        
     });
}
userimage(){
 let actionSheet = this.actionSheetCtrl.create({
     title: 'UPLOAD PROFILE IMAGE',
     buttons: [
       {
         text: 'Upload from Camera',
         role: 'Upload from Camera',
      
         handler: () => {
           console.log('Upload from Camera');
           this.fromcamera();
         }
       },
       {
         text: 'Upload from Gallery',
         handler: () => {
           this.fromgallery();
           console.log('Gallery clicked');
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


fromgallery(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.FILE_URI,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false,
   correctOrientation:true
}).then((imageData) => {
 let base64Image = imageData; 
  let c= base64Image;
  this.cropImage(c)
   var a=localStorage['employeeid']
}, (err) => {
console.log('Gallery is not Working')
})
}




fromcamera(){
//alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.FILE_URI,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false,
correctOrientation:true
}).then((imageData) => {
 let base64Image = imageData;
    
  let c= base64Image;
  this.cropImage(c)
   var a=localStorage['employeeid']
// this.func1(a);
}, (err) => {
console.log('Camera is not Working')
})
}



cropImage(img){
  this.crop.crop(img, {quality: 75})
  .then((newImage) =>{ console.log('new image path is: ' + newImage)
     // alert('new image')
     this.pic=newImage
         var a=localStorage['employeeid']
         this.func1(a);
   },
    error =>{ 
      // alert('error')
      console.error('Error cropping image', error)}
  );

}
func1(user_id:number){
      // alert("hello user"+user_id);
       
      //alert ("hello pic"+this.pic)
          var b=user_id;
          let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

          let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "profile_image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
   const fileTransfer: FileTransferObject = this.transfer.create();
   fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/employeeUpdatedImage/'+b+'.json',options)
         
       
          .then(data => {

              loader.dismiss();
            this.data.response=data;
             
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Uploaded Successfully',
               buttons: ['OK']
             });
             alert.present();

         this.ngOnInit();
           

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
 validationcheck(form){
  console.log("valid"+JSON.stringify(form))
  if (form==false || form=='false' ) {
    // code...
    this.disableStatus=true;
  }else if(form==true || form=='true'){
     this.disableStatus=false;
  }
console.log("valid"+JSON.stringify(this.custregister.valid))
}

}
