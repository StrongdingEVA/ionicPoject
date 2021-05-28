import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { SessionService } from '../../services/session/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	user: any;

	constructor(
		private router: Router,
		private session: SessionService,
		private loading: LoadingService,
		private activatedRoute: ActivatedRoute,
	) { }

	onLogin(form) {
		this.loading.show('登录中...');
		this.inLoging = true;
		setTimeout(() => {
			this.inLoging = false;
			this.loading.dismiss();
			this.router.navigate(['/app-post']);
		}, 2000);

		// this.session.login(this.user.username, this.user.password, (data) => {
		// }, (data) => {
		// 	this.inLoging = false;
		// });
	}

	public postData = {
		username: '',
		password: '',
	}

	public validate: any = {
		errorMsg: {
			username: {
				required: '手机号不能为空',
				error: '手机号格式错误'
			},
			password: {
				required: '密码不能为空',
				error: '密码格式错误'
			}
		}
	}

	private inLoging: boolean = false;
}
