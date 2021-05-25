import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  static baseUrl = 'http://127.0.0.1/mancando/test/php/index.php';

  constructor() { }

  protected getBaseUrl() {
    return RouterService.baseUrl;
  }

  public getLogin() {
    return this.getBaseUrl() + '?action=login';
  }

  public getCheckLogin() {
    return this.getBaseUrl() + '?action=checkLogin';
  }
}
