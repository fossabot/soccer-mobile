import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BifrostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BifrostProvider {

  constructor(public http: HttpClient) {

  }

  main(url:string){

  }

  search(api, body): Promise<any>{
    return this.http.post(`http://localhost:8008/${api}/search`,body).toPromise();
  }


  add(api, body): Promise<any>{
    return this.http.post(`http://localhost:8008/${api}`,body).toPromise();
  }

  put(){

  }

}
