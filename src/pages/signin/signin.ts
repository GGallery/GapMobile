import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController, NavController } from "ionic-angular";
import { ServerServices } from "../../app/services/server.services";

import { TabsPage } from "../tabs/tabs";




@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(
    private ServerService: ServerServices,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private nav : NavController
  ) {
  }

  onSignin(form: NgForm) {

    const loading = this.loadingCtrl.create({
      content: 'Accesso in corso...'
    });
    loading.present();

    this.ServerService.userAuth(form.value.email, form.value.password)
      .subscribe(

      data => {
        loading.dismiss(),
        this.nav.setRoot(TabsPage);
        
          console.log('ho il token!!' + this.ServerService.api_token)
      },

      error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Accesso fallito!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      })
  }
}
