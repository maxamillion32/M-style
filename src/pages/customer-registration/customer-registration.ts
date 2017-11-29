import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CustomerRegistration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-registration',
  templateUrl: 'customer-registration.html',
})
export class CustomerRegistration {
  name;
  email;
  password;
  cpass;
  number;
  address;
  http;
  data;
  items;
  useremail;
  pass;
  username;
  usernumber;
  check;
  custregister:FormGroup;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder, private alertCtrl: AlertController,
  	public navParams: NavParams,http:Http,public events: Events,
    public loadingCtrl:LoadingController) {
  	this.http=http;
  	this.data={}

    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let name= /^([a-zA-Z ]){1,30}$/;
    let numberregex=/^\d+$/;
    // let number=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        this.custregister = formBuilder.group({
          

 username: ['', Validators.compose([Validators.pattern(name),Validators.required])],


       useremail: ['', Validators.compose(
         [Validators.pattern(emailRegex), Validators.required])],


          gender: ['', Validators.compose([])],

     pass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3), Validators.required])],

     cpass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3), Validators.required])],
      
usernumber: ['', Validators.compose([Validators.minLength(10),Validators.maxLength(15),Validators.pattern(numberregex),Validators.required])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerRegistration');
  }
terms(){
	this.navCtrl.push('TermsOfServices')
}
skip(){
  this.navCtrl.setRoot('CustomerCategories')
  localStorage['usertype']=3;
  localStorage['auth']='false'
  localStorage['username']='Guest'
  localStorage['image']='false'
  localStorage['authenticate']='Guest';
  this.events.publish('user:created', localStorage['usertype'],localStorage['auth'],localStorage['username'],localStorage['image'])
}
reg(){
  if(this.custregister.controls["pass"].value!=this.custregister.controls["cpass"].value ) {
      let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Password or confirm password Must be Same.',
                        buttons: ['OK']
                    });
                    alert.present();
     }

else{
     if(this.check=='true'|| this.check==true){
      let loading = this.loadingCtrl.create({
       content: 'Please wait...'
      });

       loading.present();
	var link='http://gagandeepsethi.com/salonDirectory/WebServices/register.json';
	var data=JSON.stringify({
		full_name:this.name,
		email:this.email,
		password:this.password,
		confirm_password:this.cpass,
		contact_number:this.number,    
    usertype:0


	})

	
    this.http.post(link,data)
    .map(response => response.json())
     .subscribe(data=>{
      loading.dismiss().then(()=>{
         this.data = data;
         console.log("response"+JSON.stringify(this.data));
         console.log("response2"+JSON.stringify(this.data.status))
          if(this.data.status==1)
          {
            

        let alert = this.alertCtrl.create({
                title: 'Thank You',
                subTitle: 'Registration Successful Please Verify your Account',
                buttons: ['ok']
              });
              alert.present();
              this.navCtrl.push('Login')            
                      } 

                 else if(this.data.status==0){
                   console.log("inside ")
                let alert = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Entered E-Mail is already registered with us',
                buttons: ['ok']
              });
              alert.present();
                      } 
                    }),
                      error =>
             loading.dismiss().then(() => {
         let alert=this.alertCtrl.create({
        title:'SERVER ERROR',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      alert.present()


                      });
        
         
          })
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
}