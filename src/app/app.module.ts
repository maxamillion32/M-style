import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Network } from '@ionic-native/network';
import {DataService } from "../providers/data-service";
import { File } from '@ionic-native/file';
import { NgCalendarModule  } from 'ionic2-calendar';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Device} from 'ionic-native';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Crop } from '@ionic-native/crop';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '9f53d0f0'
//   },
//   'push': {
//     'sender_id': '453365466525',
//     'pluginConfig': {
//       'ios': {
//         'badge': true,
//         'sound': true
//       },
//       'android': {
//         'iconColor': '#ff0000'
//       }
//     }
//   }
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    
  ],
  imports: [
   NgCalendarModule,
    BrowserModule,
     HttpModule ,
   
     // CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp,{
    templateUrl: 'build/app.html',
     config: {
     platforms: {
      ios: {
        statusbarPadding: true
      }
    }
  }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    Camera,
     Facebook,
    DataService,
    Network ,
     File ,
      Device,
      InAppBrowser,
     PayPal,
     SocialSharing,
    FileTransfer,
    FileTransferObject,
    LaunchNavigator,
    LocationAccuracy,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
