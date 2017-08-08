import { Component, OnInit } from '@angular/core';
import { NavController,  LoadingController } from 'ionic-angular';

import { CommessePage2 } from "../commesse2/commesse2";
import { ServerServices } from "../../app/services/server.services";
import { ToastServices } from "../../app/services/toast.services";

@Component({
  selector: 'page-commesse',
  templateUrl: 'commesse.html'
})
export class CommessePage implements OnInit {

  commesseList: any[] = []
  searchQuery: string = '';


  constructor(
    public navCtrl: NavController,
    
    public ServerService: ServerServices,
    public ToastService : ToastServices,
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
          this.ToastService.Toast("Errore caricamento commesse")
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
          this.ToastService.Toast("Errore caricamento commesse")
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

 

}
