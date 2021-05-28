import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(
		private router: Router,
		private sessionService: SessionService
	) { }

	ngOnInit() {
		this.getTempData(10);
	}

	getTempData(len: number) {
		let item = { avatar: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png', img: "assets/images/111.jpg", title: 'this is title', time: '2021/5/18 14:30', discript: 'this is content discript this is content discript this is content discript this is content discript this is content discript ' };
		for (let i = 0; i < len; i++) {
			this.articles.push(item)
		}
	}

	loadData(event) {
		setTimeout(() => {
			event.target.complete();
			this.getTempData(10)
		}, 500);
	}

	post() {
		this.router.navigate(['/app-login']);return;
		this.sessionService.checkLogin((flag) => {
			if (flag) { 
				this.router.navigate(['/app-login']);
			} else {
				this.router.navigate(['/app-post']);
			}
		})
	}

	private articles = [];
}
