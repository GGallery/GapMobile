import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeriePage } from "../ferie/ferie";
import { CommessePage } from "../commesse/commesse";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  CommessePage: any;
  FeriePage: any;

  constructor(public navCtrl: NavController) {

    this.CommessePage = CommessePage;
    this.FeriePage = FeriePage;

  }



}
