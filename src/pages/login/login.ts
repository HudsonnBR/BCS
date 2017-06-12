import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from '../providers/auth-service';
import { HomePage } from '../home/home';
import { FormPage } from '../form/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data : any = {};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  public createAccount() {
    this.nav.push(FormPage);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.data).subscribe(allowed => {
      if (allowed) {
        this.nav.push(HomePage);
      } else {
        this.showError("Confira essa joça aí, porque tem algo errado!");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">Carregando...</div>
        </div>`,
      duration: 3000
    });

    loading.onDidDismiss(() => {
      console.log('Loading off....');
    });

    loading.present();
  }

  showError(text) {
      let alert = this.alertCtrl.create({
      title: 'Deu ruim!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
