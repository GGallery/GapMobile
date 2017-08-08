import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';

import { CommessePage2 } from "../commesse2/commesse2";
import { ServerServices } from "../../app/services/server.services";

@Component({
  selector: 'page-commesse',
  templateUrl: 'commesse.html'
})
export class CommessePage implements OnInit {

  commesseList: any[] = []
  searchQuery: string = '';


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public ServerService: ServerServices,
    public loadingCtrl: LoadingController
  ) {

  }

  ngOnInit(): void {
    // this.commesseList = this.commesseService.getItems().;
    this.getMy();
  }



  getMy() {
    const loading = this.loadingCtrl.create({
      content: 'Sto recuperando le tue commesse...'
    });
    loading.present();
    this.ServerService.get_mie_commesse().
      subscribe(
      (commesse: any[]) => {
        this.commesseList = commesse, 
        loading.dismiss();
      },
      (error) => {
        console.log(error),
          this.Toast("Errore caricamento commesse")
      }
      )
  }

  getAll() {
    const loading = this.loadingCtrl.create({
      content: 'Sto recuperando tutte le commesse...'
    });
    loading.present();
    this.ServerService.get_all_commesse().
      subscribe(
      (commesse: any[]) => {
        this.commesseList = commesse, 
        loading.dismiss();

      },
      (error) => {
        console.log(error),
          this.Toast("Errore caricamento commesse")
      }
      )
  }

  selectItem(commessa: any) {
    this.navCtrl.push(CommessePage2, commessa);
  }


  filtra(ev: any) {
    this.getAll();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.commesseList = this.commesseList.filter((Commessa) => {

        console.log(Commessa.oggetto.toLowerCase().indexOf(val.toLowerCase()) > -1)

        return (
          Commessa.oggetto.toLowerCase().indexOf(val.toLowerCase()) > -1

        );
      })
    }


  }

  Toast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
