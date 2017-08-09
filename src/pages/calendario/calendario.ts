import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerServices } from "../../app/services/server.services";
import { CommessePage } from "../commesse/commesse";

/**
 * Generated class for the CalendarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  commesse: any = [];
  totore: number = 0;
  giorno: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ServerServices: ServerServices
  ) {

    this.giorno = new Date().toISOString().slice(0, 10);
    this.get_calendario(this.giorno);

  }

  get_calendario(giorno: string) {
    this.ServerServices.get_calendario(this.giorno)
      .subscribe(
      (res) => {
        console.log(res.totore);
        console.log(res.commesse);

        this.commesse = res.commesse;
        this.totore = res.totore;


      }


      )


  }



  addCommessa(){

    this.navCtrl.push(CommessePage);
  }


}
