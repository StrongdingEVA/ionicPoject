import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	constructor(
		private imagePicker: ImagePicker,
		private fileTransfer: FileTransfer,
		private loading: LoadingService,
	) { }

	ngOnInit() {
		this.getLabels();
	}

	/**
	 * 选择相册的图片
	 */
	chooseImage() {
		const options = {
			maximumImagesCount: 3, // 可选择的图片数量默认 15，1为单选
			width: 400,      // 图片宽
			height: 500,      //图片高
			quality: 80,     //图片质量，质量越高图片越大,请根据实际情况选择
			outputType: 1	// 文件输出类型，你可以选择图片URL，或者base64的文件编码 这里建议选择文件编码 0:文件地址 1:图片base64编码
		};
		this.imagePicker.getPictures(options).then((results) => {
			this.loading.show('正在努力上传呢~');

			results.forEach(item => {
				this.postData.imgs.push('data:image/jpg;base64,' + item);
				this.postData.imgSum++;
			});

			setTimeout(() => {
				this.loading.dismiss();
			}, 2000);
		}, (err) => {
			alert(err);
			console.log(err);
		});
	}

	checkLabel(id) {
		this.labels[id].checked = this.labels[id].checked ^ 1;
	}

	/**
	 * 获取标签
	 */
	getLabels() {
		this.loading.show();
		setTimeout(() => {
			this.labels = [
				{ id: 1, name: "开心", checked: 0 },
				{ id: 2, name: "伤心", checked: 1 },
				{ id: 3, name: "郁闷", checked: 0 },
				{ id: 4, name: "沉思", checked: 1 },
			]
			this.loading.dismiss();
		}, 1000)
	}

	doPost(form) {
		console.log(form, form);
	}

	// 上传文件
	// upload(file) {
	// 	const fileTransfer = this.fileTransfer.create();
	// 	const options: FileUploadOptions = {
	// 		fileKey: 'file',
	// 		fileName: timestamp() + '.jpg',
	// 		params: {
	// 			type: 'file',
	// 			action: 'upload',
	// 			timestamp: timestamp(),
	// 			auth_token: '79e1bd1504962034c068461d58b9cd89a1d8a4a1'
	// 		},
	// 		headers: {}
	// 	};

	// 	fileTransfer.upload(file, 'https://imgbb.com', options)
	// 		.then((data) => {
	// 			alert('success');
	// 		})
	// 		.catch((e) => {
	// 		});
	// }

	public validate:any = {
		errorMsg: {
			title:{
				required: '标题不能为空',
				maxlength: '标题长度不能超过20'
			}
		}
	}

	public postForm;
	public labels = [];
	public postData = {
		imgs: [],
		imgSum: 0,
		title: '',
		content: ''
	}
}
