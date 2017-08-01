import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public ServerService: ServerServices) {
  }


  ngOnInit() {
    this.ServerService.getAssenti()
      .subscribe(
      (response) => {
        console.log("chi non c'è");
        this.AssentiOggi = response.assenze_oggi;
        this.AssentiFuturi = response.assenze_domani;
      }
      )


  }

}
