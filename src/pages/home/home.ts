import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeriePage } from "../ferie/ferie";
import { CommessePage } from "../commesse/commesse";

import { AssentiPage } from "../assenti/assenti";
import { ServerServices } from "../../app/services/server.services";

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  CommessePage: any;
  FeriePage: any;
  AssentiPage: any;
  AssentiOggi: any;
  AssentiFuturi: any;
  

  constructor(
    public navCtrl: NavController,
    public ServerService: ServerServices,
    private storage: Storage
  ) {

    this.CommessePage = CommessePage;
    this.FeriePage = FeriePage;
    this.AssentiPage = AssentiPage;

  }

  ngOnInit() {
  

    this.ServerService.getAssenti()
      .subscribe(
      (response) => {
        this.AssentiOggi = response.assenze_oggi;
      }
      )
  }
}
