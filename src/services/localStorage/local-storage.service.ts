import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorage: any;

  constructor() {
    this.localStorage = localStorage;
  }

  public set(key: string, value: any): void {
    if (this.localStorage) {
      this.localStorage[key] = JSON.stringify(value);
    }
  }

  public get(key: string): any {
    if (!this.localStorage) {
      return null;
    }
    let value = this.localStorage[key] || null;
    if (value) {
      value = JSON.parse(value);
    }
    return value;
  }

  public remove(key: string): any {
    if (this.localStorage) {
      this.localStorage.removeItem(key);
    }
  }
}
