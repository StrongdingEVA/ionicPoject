import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ActionSheetService extends ActionSheetController {
	constructor() {
		super();
	}

	async show(header: string, buttons: any[], cssClass?: string) {
		if (ActionSheetService.actionSheet) {
			return;
		}
		const actionSheet = await this.create({
			header: header,
			cssClass: cssClass || 'my-custom-class',
			buttons: buttons,
		});
		await actionSheet.present();
	}

	dismiss (){
		let actionSheet = ActionSheetService.actionSheet;
		ActionSheetService.actionSheet = null;

		if (actionSheet) {
			return actionSheet.dismiss();
		}
	}

	// public checkCancelBtn(buttons) {
	// 	buttons.forEach(button => {
	// 		if ()
	// 	});
	// }

	private static actionSheet = null;
}
