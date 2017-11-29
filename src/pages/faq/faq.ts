import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the Faq page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class Faq {
faq;
answer;
count=0;
faqdata;
faqcontent;
  constructor(public navCtrl: NavController, private dataservice:DataService,
    public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Faq');
  }
question(i){
	this.count++;
	if(this.count%2!=0){
		this.answer=i;
	}
	else{
		this.answer='p';
	}
}

ngOnInit(){
     
       let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.Faq())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.faqdata = data
                               this.faqcontent=this.faqdata.faqinfo;
                                                }),
                      error =>
                      loading.dismiss().then(() => {
                        let alert=this.alertCtrl.create({
           title:'Something Went Wrong',
          subTitle:'Please Try Again',
          buttons:['Ok']
          })
     
            alert.present()

                      })
                    );           
}
}
