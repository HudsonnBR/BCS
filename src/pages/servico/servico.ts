import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AjaxServiceProvider} from '../../providers/ajax-service/ajax-service';

@Component({
  selector: 'servico',
  templateUrl: 'servico.html'
})
export class CadastroServicoPage {

  cadastroServico : any = {};
  dataServico : any = {};

  constructor(public nav: NavController, public formBuilder : FormBuilder, public ajax : AjaxServiceProvider, public loadingCtrl : LoadingController) {
    this.cadastroServico = this.formBuilder.group({
      titulo:['', Validators.compose([Validators.maxLength(64), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9!-* ]*'), Validators.required])],
      valor:['', Validators.compose([Validators.maxLength(10), Validators.minLength(1), Validators.pattern('[0-9 ]*'), Validators.required])],
      descricao:['', Validators.compose([Validators.maxLength(255), Validators.minLength(10), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });
  }
  postDadosServico(data){

    this.ajax.postAnuncios(data.value).subscribe(
        res=>console.log(res.msg)
    );
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
      duration: 3500
    });

    loading.onDidDismiss(() => {
      console.log('Loading off...');
    });

    loading.present();
  }
}
