import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';

import { NgForm } from "@angular/forms";
import { ServerServices } from "../../app/services/server.services";
import { ToastServices } from "../../app/services/toast.services";

@Component({
  selector: 'page-commesse2',
  templateUrl: 'commesse2.html'
})
export class CommessePage2 {


  commessa: any

  giorno: string;

  tipologia: number
  id_commessa: number;
  n_ore: number;

  constructor(

    public navCtrl: NavController,
    public navParam: NavParams,
    public ToastService: ToastServices,
    public ServerService: ServerServices
  ) {
    this.commessa = this.navParam.data;
    this.id_commessa = this.commessa.id;
    this.tipologia = 0;
    this.giorno = new Date().toISOString().slice(0, 10);

  }


  dataOggi() {
    this.giorno = new Date().toISOString().slice(0, 10);
  }

  dataIeri() {
    let ieri = (d => new Date(d.setDate(d.getDate() - 1)))(new Date);
    this.giorno = ieri.toISOString().slice(0, 10);
  }

  nOre(n: number) {
    if (n == 12)
      this.n_ore = this.n_ore + 0.5;
    else
      this.n_ore = n;
  }


  onInserisciCommessa(f: NgForm) {
    this.ServerService.commessa_store(f)
      .subscribe(
      (result) => {
        if (result.esito == 'true') {
          this.navCtrl.pop();
          this.ToastService.Toast("Commessa caricata correttamente");
          
        }
        else
          this.ToastService.Toast("Errore caricamento!")
      }
      );



  }

}
