import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the SalonImageGallery page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-image-gallery',
  templateUrl: 'salon-image-gallery.html',
})
export class SalonImageGallery {
minedata
user_id
image
myimage
show:boolean=false
mydata
id
mystatus
  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,
  	public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonImageGallery');
  }


ngOnInit(){

// http://europa.promaticstechnologies.com/salonDirectory/img/salonimage

    let loading = this.loadingCtrl.create({content: 'Loading'});
    Observable.of(loading).flatMap(loading => loading.present())

     .flatMap(data => Observable.forkJoin(this.dataservice.viewprofileinfo(this.user_id),this.dataservice.viewgalleryimage(this.user_id)))
    

     .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                       this.minedata=data[0]
                   this.image= this.minedata.saloninfo.salon_image
                   
                        this.myimage = data[1].galleryimage
                        this.id=data[1].image_id
                    }),
               error=>{
      let alert=this.alertCtrl.create({
        title:'Timeout',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()
    })
 }
   showConfirm(myimage_name) {
    let confirm = this.alertCtrl.create({
      title: 'Delete Image?',
      message: 'Are You Sure To Delete This Image?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.delete_image(myimage_name)
          }
        }
      ]
    });
    confirm.present();
  }

  delete_image(image_name){

   let loading = this.loadingCtrl.create({content: 'Loading...'});
        Observable.fromPromise(loading.present())
            .flatMap(data => this.dataservice.delete_gallery_image(image_name,this.id))
      .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                       this.mydata=data
                                    this.mystatus=this.mydata.status
               if(this.mystatus==1){
                  let alert = this.alertCtrl.create({
                                    title: ' Deleted Successfully',
                                    buttons: ['Dismiss']
                                   


                     });
                          alert.present();




               }
this.ngOnInit();


  }))

}

  show_hide_icon(){
this.show=!this.show

  }



}
