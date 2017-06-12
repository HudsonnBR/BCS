import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { Http} from '@angular/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.html'
})
export class FormPage {

  teste : string = 'Teste Maroto';
  cadastro : any = {};
  data : any = {};

  constructor(public nav: NavController, public formBuilder : FormBuilder, public http : Http, public loadingCtrl: LoadingController) {
    this.cadastro = this.formBuilder.group({
      nome:['', Validators.compose([Validators.maxLength(32), Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usuario:['', Validators.compose([Validators.maxLength(32), Validators.minLength(2), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      email:['', Validators.compose([Validators.maxLength(32), Validators.minLength(11), Validators.pattern('[a-zA-Z0-9@. ]*'), Validators.required])],
      senha:['', Validators.compose([Validators.maxLength(32), Validators.minLength(8), Validators.required])]
    });
  }
  postDados(){
    this.showLoading();
    console.log(this.cadastro.value);
    this.data = this.cadastro.value;
    this.http.post('http://localhost:2000/cadastro', this.data)
      .subscribe ( data => {console.log(data);});
  }
  Cadastrar(){
    this.nav.setRoot(HomePage);
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">Carregando...</div>
        </div>`,
      duration: 1500
    });

    loading.onDidDismiss(() => {
      console.log('Loading off....');
    });

    loading.present();
  }
}
