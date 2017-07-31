import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeriePage } from "../ferie/ferie";
import { CommessePage } from "../commesse/commesse";
import { UsersServices } from "../../app/services/users.services";
import { AssentiPage } from "../assenti/assenti";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  CommessePage: any;
  FeriePage: any;
  AssentiOggi: any;
  AssentiFuturi: any;

  constructor(
    public navCtrl: NavController,
    public UsersServices: UsersServices
  ) {

    this.CommessePage = CommessePage;
    this.FeriePage = FeriePage;

  }

  ngOnInit() {
    this.UsersServices.getAssenti()
      .subscribe(
      (response) => {
        // this.AssentiOggi = response.
        console.log("chi non c'è");
        this.AssentiOggi = response.assenze_oggi;
        this.AssentiFuturi = response.assenze_domani;
      }
      )


  }



  gotoAssenti() {
    this.navCtrl.push(AssentiPage);
  }



}
