import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(
    private local: LocalStorageService
  ) {
  }

  set(data) {
    let value = JSON.stringify(data);
    this.local.set(this.key, value);
  }

  get(success, error?) {
    let data = this.local.get(this.key);
    if (data) {
      data = JSON.parse(data);
    }
    success(data);
  }

  clear(success) {
    this.local.remove(this.key);
    success();
  }

  private key = 'MGSESSID';
}
