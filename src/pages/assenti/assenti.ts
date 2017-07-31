import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersServices } from "../../app/services/users.services";


@Component({
  selector: 'page-assenti',
  templateUrl: 'assenti.html',
})
export class AssentiPage implements OnInit {

  AssentiOggi: any;
  AssentiFuturi: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private UsersServices: UsersServices) {
  }


  ngOnInit() {
    this.UsersServices.getAssenti()
      .subscribe(
      (response) => {
        console.log("chi non c'è");
        this.AssentiOggi = response.assenze_oggi;
        this.AssentiFuturi = response.assenze_domani;
      }
      )


  }

}
