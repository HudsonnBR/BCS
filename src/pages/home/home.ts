import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pesquisatexto : string = "HudsonnBR";
  vrau : string = 'Eita preula!';

  constructor(public navCtrl: NavController) {

  }
   pesquisaTexto = function(){
    return "Retornando..." +this.pesquisatexto;
  }
}
