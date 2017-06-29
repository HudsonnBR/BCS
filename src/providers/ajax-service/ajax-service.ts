import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the AjaxServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AjaxServiceProvider {
  private API: string = 'http://localhost:2000';
  constructor(public http : Http) {
    this.getAnuncios();
  }

  getAnuncios(){
    return this.http.get(this.API+'/anuncios').map(res => res.json());
  }

  postAnuncios(data){
    return this.http.post(this.API+'/anuncios', data).map((res:Response) => {return res.json()});
  }
  postDados(data){
    return this.http.post(this.API+'/cadastro', data).map((res:Response) => {return res.json()});
  }
}
