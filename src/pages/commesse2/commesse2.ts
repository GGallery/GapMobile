import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { CommesseServices } from "../../app/services/commesse.services";
import { Commessa } from "../../app/models/commessa";

@Component({
  selector: 'page-commesse2',
  templateUrl: 'commesse2.html'
})
export class CommessePage2 implements OnInit {


  commessa: Commessa
  giorno: string = new Date().toISOString()
  tipologia: any


  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public toastCtrl: ToastController,
    public commesseService: CommesseServices
  ) {

  }

  ngOnInit(): void {
    this.commessa = this.navParam.data;

    console.log(this.commessa);
  }



}
