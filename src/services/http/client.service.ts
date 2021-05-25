import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private http: HttpClient
  ) {
    this.handleError = (data) => {
      console.log(data.message);
    };
    this.handleNoLogin = (data) => {
      console.log(data.message);
    };
  }

  /**
   * 设置默认错误处理
   * @param {Function} handleError 服务器返回错误结果时的处理函数
   */
  public setHandleError(handleError) {
    this.handleError = handleError;
  }

  /**
   * 设置未登录时默认处理
   * @param {Function} handleNoLogin 服务器返回未登录时的处理函数
   */
  public setHandleNoLogin(handleNoLogin) {
    this.handleNoLogin = handleNoLogin;
  }

  get(url: string, params?: any, options?: {}) {
    if (typeof params == 'string') {
      if (url.indexOf('?') > -1) {
        url += '&' + params;
      } else {
        url += '?' + params;
      }
    }

    if (typeof params == 'object') {
      options['params'] = params;
    }

    let observable = this.http.get(url, options);
    return this.createObservabel(observable);
  }

  post(url: string, params?: any, options?: {}) {
    let body = JSON.stringify(params);
		// options['headers'].append('Content-Type', 'application/json');
    
    let observable = this.http.post(url, body, options);
    return this.createObservabel(observable);
  }

  createObservabel(observable) {
    let self = this;
    return new Observable(function subscribe(observer) {
      function observerError(data) {
        try {
          observer.error(data);
        } catch (error) {
          self.handleError(error);
        }
      }

      observable.subscribe({
        next: (data) => {
          switch (data.code) {
            case 1000: observer.next(data); break;
            case 2000: observerError(data); break;
            case 5000: self.handleNoLogin(data); break;
            default: break;
          }
        },
        error: (error) => { },
        complete: () => {
          observer.complete()
        }
      })
    })
  }

  private handleError;
  private handleNoLogin;
}
