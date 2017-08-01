import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ServerServices } from "../../app/services/server.services";


@Component({
  selector: 'page-assenti',
  templateUrl: 'assenti.html',
})
export class AssentiPage implements OnInit {

  AssentiOggi: any;
  AssentiFuturi: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ServerService: ServerServices,
    public loadingCtrl: LoadingController
  ) {
  }


  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content: 'Sto recuperando tutte le assenze future...'
    });
    loading.present();
    this.ServerService.getAssenti()
      .subscribe(
      (response) => {
        this.AssentiOggi = response.assenze_oggi;
        this.AssentiFuturi = response.assenze_domani;
        loading.dismiss();
      }
      )


  }

}
