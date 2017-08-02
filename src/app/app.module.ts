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

import { HttpModule } from "@angular/http";
import { CommessePage2 } from "../pages/commesse2/commesse2";

import { AssentiPage } from "../pages/assenti/assenti";
import { AuthService } from "./services/auth";
import { ServerServices } from "./services/server.services";

import { IonicStorageModule } from '@ionic/storage';
import { SigninPage } from "../pages/signin/signin";

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
    AssentiPage, 
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule,
    IonicStorageModule.forRoot()
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
    AssentiPage, 
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServerServices,
    AuthService

  ]
})
export class AppModule { }
