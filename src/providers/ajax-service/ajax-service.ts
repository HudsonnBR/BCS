import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the AjaxServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AjaxServiceProvider {
  private API: string = 'http://localhost:2000' ;
  data : any = {};

  constructor(public http : Http) {
    this.getAnuncios();
  }

  getAnuncios(){
    return this.http.get(this.API+'/anuncios').map(res => res.json());
  }
  
  postAnuncios(data){
    return this.http.post(this.API+'/data', this.data).map(res => res.json());
  }
}
