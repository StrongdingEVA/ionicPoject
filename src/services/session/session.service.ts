import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { ClientService } from '../http/client.service';
import { RouterService } from '../routes/router.service';

@Injectable({
	providedIn: 'root'
})
export class SessionService {

	constructor(
		private cookieService: CookieService,
		private clientService: ClientService,
		private routerService: RouterService
	) { }

	/**
	 * 登录
	 * @param {username} username 用户名
	 * @param {password} password 密码
	 * @param {success} success 登录成功回调
	 * @param {failed} error 登录失败回调
	 */
	login(username: string, password: string, success, failed?) {
		this.clientService.post(this.routerService.getLogin(), { username: username, password: password }).subscribe((data: any) => {
			if (data.code == 1000) {
				let info = data.data;
				let value = { name: info.session_name, value: info.session_id };
				this.cookieService.set(value);
			} else {
				failed(data);
			}
			success(data);
		}, error => {
			failed();
		});
	}

	checkLogin(success) {
		this.cookieService.get((data) => {
			this.clientService.post(this.routerService.getCheckLogin(), data).subscribe((data: any) => {
				if (data.code == 1000) {
					success(true);
				}
				success(false);
			}, (error) => {
				success(false);
			});
		}, (err) => {
			success(false);
		});
	}

	setStorage() {

	}
}
