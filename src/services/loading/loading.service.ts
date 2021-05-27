import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class LoadingService extends LoadingController {
	/**
	 * 
	 * @param msg 
	 * @param duraing 
	 * @returns 
	 */
	async show(msg?: string, duraing: number = 0) {
		msg = msg || '加载中...';
		if (LoadingService.loading) {
			return;
		}

		const loading = await this.create({
			cssClass: 'my-custom-class',
			message: msg,
			duration: duraing
		});
		await loading.present();

		LoadingService.loading = loading;
	}

	dismiss() {
		let loading = LoadingService.loading;
		LoadingService.loading = null;

		if (loading) {
			return loading.dismiss();
		}
	}

	private static loading = null;
}
