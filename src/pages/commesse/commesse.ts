import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-commesse',
  templateUrl: 'commesse.html'
})
export class CommessePage {

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController
  ) {

  }

    presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Commessa scelta correttamente',
      duration: 3000
    });
    toast.present();
  }

}
