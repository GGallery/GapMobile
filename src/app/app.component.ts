import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from "../pages/home/home";
import { ServerServices } from "./services/server.services";
import { Storage } from '@ionic/storage';
import { SigninPage } from "../pages/signin/signin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;


  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ServerService: ServerServices,
    storage: Storage) {


    // set a key/value
    // this.storage.set('api_token', '123456789');

    // Or to get a key/value pair

    storage.clear();
    storage.get('api_token')
      .then((val) => {
        if (val) {
          console.log("api_token: " + val);
          ServerService.isAuth = true;
          ServerService.api_token = val;
          this.rootPage = TabsPage;
        } else {
          console.log("api_token non diposnibile");
          ServerService.isAuth = false;
          ServerService.api_token = null;
          this.rootPage = SigninPage;
        }
      })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.




      statusBar.styleDefault();
      splashScreen.hide();




    });
  }
}
