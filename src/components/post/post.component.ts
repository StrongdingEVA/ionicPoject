import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	constructor(
		private imagePicker: ImagePicker,
		private fileTransfer: FileTransfer
	) { }

	ngOnInit() {
		console.log(location);
	}

	chooseImage() {
		const options = {
			maximumImagesCount: 2
			// width: int,
			// height: int,
			// quality: int (0-100),
			// outputType: int
		};
		this.imagePicker.getPictures(options).then((results) => {
			console.log(results, 11111);
			// for (const res of results) {
			// 	this.upload(res);
			// }
		}, (err) => {
			console.log(err);
		});
	}
}
