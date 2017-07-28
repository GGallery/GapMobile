import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CommesseServices } from "../../app/services/commesse.services";
import { Commessa } from "../../app/models/commessa";

@Component({
  selector: 'page-commesse',
  templateUrl: 'commesse.html'
})
export class CommessePage implements OnInit {

  commesseList: Commessa[] = []

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public commesseService: CommesseServices
  ) {

  }


  ngOnInit(): void {
    // this.commesseList = this.commesseService.getItems().;
    this.commesseService.getItems().
      subscribe(
      (commesse: any[]) => {
        this.commesseList = commesse,
          console.log(this.commesseList)
      },
      (error) => console.log(error)
      )
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Commessa scelta correttamente',
      duration: 3000
    });
    toast.present();
  }

}
