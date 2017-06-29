import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AjaxServiceProvider} from '../../providers/ajax-service/ajax-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  anuncios: any[];
  constructor(public navCtrl: NavController, public ajax : AjaxServiceProvider) {
    ajax.getAnuncios().subscribe(
      data => this.anuncios = data,
      err => console.log(err) 
    );
  }

}
