import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HummerProvider } from '../hummer/hummer';

/*
  Generated class for the BifrostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BifrostProvider {
  private restUrl: string = 'http://localhost:8008';
  constructor(
    public hummer: HummerProvider,
    public http: HttpClient) {

  }

  main(method, url, body?): Promise<any> {
    this.hummer.loading(true);
    let requests = {
      post: this.http.post(url, body),
      get: this.http.get(url),
      put: this.http.put(url, body)
    };

    return requests[method]
      .toPromise()
      .then(response => {
        this.hummer.loading(false);
        return response;
      })
      .catch(err => {
        this.hummer.loading(false);
        return err;
      });
  }

  search(api, body): Promise<any> {
    return this.main('post', `${this.restUrl}/${api}/search`, body)
  }

  add(api, body): Promise<any> {
    return this.main('post', `${this.restUrl}/${api}`, body)
  }

  put() {

  }

}
