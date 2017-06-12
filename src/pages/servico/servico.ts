import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'servico',
  templateUrl: 'servico.html'
})
export class CadastroServicoPage {

  cadastroServico : any = {};
  data : any = {};

  constructor(public nav: NavController, public formBuilder : FormBuilder, public http : Http) {
    this.cadastroServico = this.formBuilder.group({
      titulo:['', Validators.compose([Validators.maxLength(32), Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      descricao:['', Validators.compose([Validators.maxLength(255), Validators.minLength(10), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
    });
  }
  postDadosServico(){
    console.log(this.cadastroServico.value);
    this.data = this.cadastroServico.value;
    this.http.post('http://localhost:2000/cadastroServico', this.data)
      .subscribe ( data => {console.log(data);});
  }
  Cadastrar(){
    this.nav.setRoot(HomePage);
  }
}
