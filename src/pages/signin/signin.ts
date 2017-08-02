import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";
import { ServerServices } from "../../app/services/server.services";




@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(private ServerService: ServerServices,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  onSignin(form: NgForm) {

    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();

    this.ServerService.userAuth("antonio@ggallery.it", "GGallery00")
      .subscribe(

      data => {
        loading.dismiss(),
          console.log(data);
      })
    // .catch(error => {
    //   loading.dismiss();
    //   const alert = this.alertCtrl.create({
    //     title: 'Signin failed!',
    //     message: error.message,
    //     buttons: ['Ok']
    //   });
    //   alert.present();
    // });
  }
}
