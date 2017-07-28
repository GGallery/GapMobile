import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CommesseServices } from "../../app/services/commesse.services";
import { Commessa } from "../../app/models/commessa";

@Component({
  selector: 'page-commesse',
  templateUrl: 'commesse.html'
})
export class CommessePage implements OnInit {

  commesseList: Commessa[] = []
  searchQuery: string = '';
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public commesseService: CommesseServices
  ) {

  }

  ngOnInit(): void {
    // this.commesseList = this.commesseService.getItems().;
    this.getMy();
  }



  getMy() {
    this.commesseService.getItems('getMy').
      subscribe(
      (commesse: any[]) => {
        this.commesseList = commesse,
          this.Toast("Commesse caricate")
        console.log(this.commesseList)
      },
      (error) => {
        console.log(error),
          this.Toast("Errore caricamento commesse")
      }
      )
  }

  getAll() {
    this.commesseService.getItems('getAll').
      subscribe(
      (commesse: any[]) => {
        this.commesseList = commesse,
        console.log(this.commesseList)
      },
      (error) => {
        console.log(error),
          this.Toast("Errore caricamento commesse")
      }
      )
  }

  selectItem(id:number){
    console.log(id);
  }


  filtra(ev: any) {
    this.getAll();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.commesseList = this.commesseList.filter((Commessa) => {

        console.log(Commessa.oggetto.toLowerCase().indexOf(val.toLowerCase()) > -1)

        return (
          Commessa.oggetto.toLowerCase().indexOf(val.toLowerCase()) > -1

        );
      })
    }


  }

  Toast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
