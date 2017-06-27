import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'servico',
  templateUrl: 'servico.html'
})
export class CadastroServicoPage {

  cadastroServico : any = {};
  dataServico : any = {};

  constructor(public nav: NavController, public formBuilder : FormBuilder, public http : Http, public loadingCtrl : LoadingController) {
    this.cadastroServico = this.formBuilder.group({
      titulo:['', Validators.compose([Validators.maxLength(32), Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      valor:['', Validators.compose([Validators.maxLength(10), Validators.minLength(1), Validators.pattern('[0-9 ]*'), Validators.required])],
      descricao:['', Validators.compose([Validators.maxLength(255), Validators.minLength(10), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });
  }
  postDadosServico(){
    this.showLoading();
    console.log(this.cadastroServico.value);
    this.dataServico = this.cadastroServico.value;
    this.http.post('http://localhost:2000/cadastroServico', this.dataServico)
      .subscribe ( dataServico => {console.log(dataServico);});
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
