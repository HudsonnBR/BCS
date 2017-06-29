import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import {AjaxServiceProvider} from '../../providers/ajax-service/ajax-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.html'
})
export class FormPage {

  teste : string = 'Teste Maroto';
  cadastro : any = {};
  data : any = {};

  constructor(public nav: NavController, public formBuilder : FormBuilder, public ajax : AjaxServiceProvider, public loadingCtrl: LoadingController) {
    this.cadastro = this.formBuilder.group({
      nome:['', Validators.compose([Validators.maxLength(32), Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usuario:['', Validators.compose([Validators.maxLength(16), Validators.minLength(2), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      email:['', Validators.compose([Validators.maxLength(32), Validators.minLength(11), Validators.pattern('[a-zA-Z0-9@. ]*'), Validators.required])],
      senha:['', Validators.compose([Validators.maxLength(32), Validators.minLength(8), Validators.required])]
    });
  }
  postDados(dados){
    this.showLoading();
    this.ajax.postDados(dados.value).subscribe(res=>console.log(res.msg));
  }
  Cadastrar(){
    this.nav.setRoot(HomePage);
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">Enviando Dados, Aguarde...</div>
        </div>`,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Loading off...');
    });

    loading.present();
  }
}
