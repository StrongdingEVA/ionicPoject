import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	user: any;

	constructor(
		private router: Router,
		private session: SessionService,
		private activatedRoute: ActivatedRoute,
	) {
		this.user = {
			username: '',
			password: '',
		};
	}

	ngOnInit() {
		console.log(location);
		// this.activatedRoute.params.subscribe((data) => {
		// 	console.log(data);
		// })
	}

	onLogin(form) {
		this.inLoging = true;
		if (form.valid) {
			this.router.navigate(['/app-post']);
			// this.session.login(this.user.username, this.user.password, (data) => {
			// }, (data) => {
			// 	this.inLoging = false;
			// });
		}
	}

	private history: string = '';
	private inLoging: boolean = false;
}
