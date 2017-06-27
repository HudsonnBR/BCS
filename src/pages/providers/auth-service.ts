import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  email: string;
  senha: string;

  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.senha === null) {
      return Observable.throw("Tem alguma coisa errada aí, parceiro. Olha aí.");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.senha === "senha" && credentials.email === "email");
        this.currentUser = new User('HudsonnBR', 'hudsonnlive@live.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.senha === null) {
      return Observable.throw("Por favor, preencha os campos!");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
