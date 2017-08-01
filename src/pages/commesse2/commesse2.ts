import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { NgForm } from "@angular/forms";
import { ServerServices } from "../../app/services/server.services";

@Component({
  selector: 'page-commesse2',
  templateUrl: 'commesse2.html'
})
export class CommessePage2 {


  commessa: any
  giorno: string = new Date().toISOString()
  tipologia: number
  id_commessa: number;
  n_ore: number;

  constructor(

    public navCtrl: NavController,
    public navParam: NavParams,
    public toastCtrl: ToastController,
    public ServerService: ServerServices
  ) {
    this.commessa = this.navParam.data;
    this.id_commessa = this.commessa.id;
    this.tipologia= 0;

  }

 
  dataOggi() {
    this.giorno = new Date().toISOString();
  }

  dataIeri() {
    let ieri = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
    console.log(ieri.toISOString());
    this.giorno = ieri.toISOString();
    console.log(this.giorno);

  }
 
  nOre(n: number) {
    if (n == 12)
      this.n_ore = this.n_ore + 0.5;
    else
      this.n_ore = n;
  }


onInserisciCommessa(f:NgForm){
  this.ServerService.storeData(f);



}

}
