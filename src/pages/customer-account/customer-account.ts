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
@IonicPage()
@Component({
  selector: 'page-customer-account',
  templateUrl: 'customer-account.html',
})
export class CustomerAccount {
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
  userpic
  customerpic;
  disableStatus:boolean=false;
 custregister:FormGroup;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private transfer: FileTransfer, 
  	public loadingCtrl: LoadingController,
    public events: Events,
    private file: File,
     public formBuilder: FormBuilder,
   public navParams: NavParams,http:Http) {


  	this.http=http;
  	this.data={}
  	this.edit='false'
  	this.userid=localStorage['customerid']
  	//alert("hello id"+this.userid)

     let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let name= /^([a-zA-Z ]){1,30}$/;
    let numberregex=/^\d+$/;
    // let number=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        this.custregister = formBuilder.group({
          

 username: ['', Validators.compose([Validators.pattern(name),Validators.required])],
 useraddress: ['', Validators.compose([Validators.required])],
    
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
  var link='http://gagandeepsethi.com/salonDirectory/WebServices/customerViewProfile.json';
	var data=JSON.stringify({

		customer_id:this.userid,
	

	})

	this.http.post(link,data)
	 .map(response => response.json())
     .subscribe(data=>{
       loading.dismiss().then(()=>{

        this.viewinfo = data;
         console.log("response"+JSON.stringify(this.viewinfo));
                this.username=this.viewinfo.customerdata.full_name;
                 this.email=this.viewinfo.customerdata.email;
                this.number=this.viewinfo.customerdata.contact_number;
                this.address=this.viewinfo.customerdata.address;
                this.customerpic=this.viewinfo.customerdata.profile_image;


               if(this.customerpic=='null' || this.customerpic==null){
                    // this.pic=this.customerpic
                    this.userpic='assets/img/user.jpg';
               }

               else {
                    
                    var a=this.customerpic.includes("http")

                    if(a==true||a=='true'){
                     this.userpic=this.viewinfo.customerdata.profile_image;
                    }
                      else{
               this.userpic='http://gagandeepsethi.com/salonDirectory/img/customerprofileimage/'+this.viewinfo.customerdata.profile_image;
                      } 


               }

        this.events.publish('user:created', localStorage['usertype'],
         localStorage['auth'],this.username,this.userpic,this.userpic);

console.log("hello pic hai ye"+JSON.stringify(this.customerpic))

       }), error =>
             loading.dismiss().then(() => {
           let alert=this.alertCtrl.create({
            title:'Something Went Wrong',
             subTitle:'Please Try Again',
             buttons:['Ok']
      })
    
      alert.present() });
        
       
               
     })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAccount');
  }
update(){
   this.edit='true';
}
save(){
        
     let loading = this.loadingCtrl.create({ content: 'Please wait...'});

  loading.present();
  var link='http://gagandeepsethi.com/salonDirectory/WebServices/customerProfileEdit.json';
	var data=JSON.stringify({

		customer_id:this.userid,
	     full_name:this.username,
	     email:this.email,
	     contact_number:this.number,
	     address:this.address

	})

	this.http.post(link,data)
	 .map(response => response.json())
     .subscribe(data=>{
       loading.dismiss().then(()=>{
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
     }),
          error =>
             loading.dismiss().then(() => {
            let alert=this.alertCtrl.create({
            title:'Timeout',
            subTitle:'Please Try Again',
            buttons:['Ok']
          }) 
        alert.present()});
        
      
        
     })

}
userimage(){
 let actionSheet = this.actionSheetCtrl.create({
     title: 'UPLOAD PROFILE IMAGE',
     buttons: [
       {
         text: 'Upload from Camera',
         role: 'Upload from Camera',
          icon:'camera',
         handler: () => {
           console.log('Upload from Camera');
           this.fromcamera();
         }
       },
       {
         text: 'Upload from Gallery',
         icon:'images',
         handler: () => {
           this.fromgallery();
           console.log('Gallery clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
          icon:'close-circle',
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
  quality: 75,
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
 var a= localStorage['customerid']
this.func1(a);
}, (err) => {
console.log('Gallery is not Working')
})
}




fromcamera(){
// alert("inside camera")
this.camera.getPicture({
quality: 75,
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
   var a=localStorage['customerid']
this.func1(a);
}, (err) => {
console.log('Camera is not Working')
})
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
   fileTransfer.upload(this.pic,'http://gagandeepsethi.com/salonDirectory/WebServices/updatedCustomerImage/'+b+'.json',options)
         
       
          .then(data => {
        
              loader.dismiss().then(()=>{
                 this.data.response=data;
             
               let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Uploaded Successfully',
               buttons: ['OK']
                });
                 alert.present();
               this.ngOnInit();
          
              }), (err) => {
            
               loader.dismiss().then(()=>{
               let alert = this.alertCtrl.create({
               title: 'Error!',
               subTitle: 'Try Again!',
               buttons: ['OK']
             });
             alert.present();
 
               })}
          
           

      })

          



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

