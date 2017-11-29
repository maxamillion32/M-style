import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the CustomerSalonGallery page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-salon-gallery',
  templateUrl: 'customer-salon-gallery.html',
})
export class CustomerSalonGallery {
slideData
images
salonid
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,private dataservice:DataService,
     public navParams: NavParams)
   {

     this.salonid=this.navParams.get('salonid')
  	// this.slideData = [
  	// { image: "assets/img/makeup.jpg" },
  	// { image: "assets/img/other.jpg" },
  	// { image: "assets/img/salon2.jpg" }]
  }

 
   ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.Salonimages(this.salonid))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.images = data
                       this.slideData=this.images.galleryimage;
                                                }),
                                error =>
             loading.dismiss().then(() => {
           let alert=this.alertCtrl.create({
           title:'SERVER ERROR',
           subTitle:'Please Try Again',
           buttons:['Ok']
           })
          alert.present()


                      })

                    ); 

  }

}
