import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { CommesseServices } from "../../app/services/commesse.services";
import { Commessa } from "../../app/models/commessa";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-commesse2',
  templateUrl: 'commesse2.html'
})
export class CommessePage2 {


  commessa: Commessa
  giorno: string = new Date().toISOString()
  tipologia: any
  id_commessa: number;
  n_ore: number;

  constructor(

    public navCtrl: NavController,
    public navParam: NavParams,
    public toastCtrl: ToastController,
    public commesseService: CommesseServices
  ) {
    this.commessa = this.navParam.data;
    this.id_commessa = this.commessa.id;

  }

  onInserisciCommessa(f: NgForm) {
    console.log(f);

  }

  dataOggi() {
    this.giorno = new Date().toISOString();
  }

  nOre(n: number) {
    console.log(n);
    if (n == 12)
      this.n_ore = this.n_ore + 0.5;
    else
      this.n_ore = n;


      console.log(this.n_ore);
  }


}
