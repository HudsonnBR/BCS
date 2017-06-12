import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
  companies : any = 0;


  constructor(public navCtrl: NavController) {

  }

}
