import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeriePage } from "../pages/ferie/ferie";
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { CommessePage } from "../pages/commesse/commesse";
import { CommesseServices } from "./services/commesse.services";
import { HttpModule } from "@angular/http";
import { CommessePage2 } from "../pages/commesse2/commesse2";
import { UsersServices } from "./services/users.services";
import { AssentiPage } from "../pages/assenti/assenti";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'eb8229b2'
  }
};

@NgModule({
  declarations: [
    MyApp,
    
    ContactPage,
    HomePage,
    FeriePage, 
    CommessePage,
    CommessePage2,
    TabsPage, 
    AssentiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     CloudModule.forRoot(cloudSettings),
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ContactPage,
    HomePage,
    FeriePage,
    CommessePage,
    CommessePage2,
    TabsPage, 
    AssentiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommesseServices, 
    UsersServices

  ]
})
export class AppModule {}
