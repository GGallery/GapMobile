import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeriePage } from "../ferie/ferie";
import { CommessePage } from "../commesse/commesse";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  
  tab3Root = ContactPage;
  tab4Root = FeriePage;
  tab5Root = CommessePage;

  constructor() {

  }
}
