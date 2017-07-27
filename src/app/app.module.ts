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
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ContactPage,
    HomePage,
    FeriePage,
    CommessePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
