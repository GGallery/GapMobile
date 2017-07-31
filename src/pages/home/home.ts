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
  AssentiPage : any;
  AssentiOggi: any;
  AssentiFuturi: any;

  constructor(
    public navCtrl: NavController,
    public UsersServices: UsersServices
  ) {

    this.CommessePage = CommessePage;
    this.FeriePage = FeriePage;
    this.AssentiPage = AssentiPage;

  }

  ngOnInit() {
    this.UsersServices.getAssenti()
      .subscribe(
      (response) => {
        this.AssentiOggi = response.assenze_oggi;
      }
      )
  }
}
