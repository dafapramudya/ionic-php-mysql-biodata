import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-input-biodata',
	templateUrl: 'input-biodata.html'
})

export class InputBiodata{
	public form 				: FormGroup;
	public biodataNamaDepan		: any;
	public biodataNamaBelakang	: any;
	public biodataJenisKelamin	: any;
	public biodataAlamat		: any;
	public biodataNoTelp		: any;
	public biodataEmail			: any;

	public isEdited				: boolean = false;
	public hideForm				: boolean = false;
	public pageTitle			: string;

	public idBiodata 			: any = null;

	private baseURI				: string = "http://localhost/ionic/"

	constructor(public navCtrl: NavController, public http: Http, public NP: NavParams, public fb: FormBuilder, public toastCtrl: ToastController)
	{
		this.form = fb.group({
			"namaDepan"			: ["", Validators.required],
			"namaBelakang"		: ["", Validators.required],
			"jenisKelamin"		: ["", Validators.required],
			"alamat"			: ["", Validators.required],
			"noTelp"			: ["", Validators.required],
			"email"				: ["", Validators.required]
		});
	}

	ionViewWillEnter()
	{
		this.resetFields();

		if(this.NP.get("record"))
		{
			this.isEdited		= true;
			this.pilihData(this.NP.get("record"));
			this.pageTitle		= 'Kembali';
		}
		else
		{
			this.isEdited		= false;
			this.pageTitle		= 'Input Data';
		}
	}

	pilihData(item)
	{
		this.biodataNamaDepan 		= item.namaDepan;
		this.biodataNamaBelakang 	= item.namaBelakang;
		this.biodataJenisKelamin 	= item.jenisKelamin;
		this.biodataAlamat 			= item.alamat;
		this.biodataNoTelp 			= item.noTelp;
		this.biodataEmail 			= item.email;
		this.idBiodata 				= item.idBiodata;
	}

	inputData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email)
	{
		let body	 	: string 	= "key=insert&namaDepan=" +namaDepan+ "&namaBelakang=" +namaBelakang+ 							  "&jenisKelamin=" +jenisKelamin+ "&alamat=" +alamat+ "&noTelp=" +noTelp+ "&email=" +email,
			type		: string 	= "application/x-www-form-urlencoded;charset=UTF-8",
			headers		: any		= new Headers({'Content-Type':type}),
			options 	: any 		= new RequestOptions({headers:headers}),
			url         : any 		= this.baseURI + "manage.php";

		this.http.post(url, body, options)
		.subscribe((data) => {
			if(data.status === 200)
			{
				this.hideForm = true;
				this.sendNotification('Data disimpan');
			}
			else
			{
				this.sendNotification('Terdapat kesalahan!');
			}
		});
	}

	updateData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email)
	{
		let body	 	: string 	= "key=update&namaDepan=" +namaDepan+ "&namaBelakang=" +namaBelakang+ 							  "&jenisKelamin=" +jenisKelamin+ "&alamat=" +alamat+ "&noTelp=" +noTelp+ "&email=" +email+ 				  "&idBiodata=" + this.idBiodata,
			type		: string 	= "application/x-www-form-urlencoded;charset=UTF-8",
			headers		: any		= new Headers({'Content-Type':type}),
			options 	: any 		= new RequestOptions({headers:headers}),
			url         : any 		= this.baseURI + "manage.php";

		this.http.post(url, body, options)
		.subscribe((data) => {
			if(data.status === 200)
			{
				this.hideForm = true;
				this.sendNotification('Data telah diupdate');
			}
			else
			{
				this.sendNotification('Terdapat kesalahan!');
			}
		});
	}

	hapusData()
	{
		let body	 	: string 	= "key=hapus idBiodata=" +this.idBiodata,
			type		: string 	= "application/x-www-form-urlencoded;charset=UTF-8",
			headers		: any		= new Headers({'Content-type':type}),
			options 	: any 		= new RequestOptions({headers:headers}),
			url         : any 		= this.baseURI + "manage.php";

		this.http.post(url, body, options)
		.subscribe((data) => {
			if(data.status === 200)
			{
				this.hideForm = true;
				this.sendNotification('Data telah dihapus');
			}
			else
			{
				this.sendNotification('Terdapat kesalahan!');
			}
		});
	}

	simpanData()
	{
		let namaDepan 			: string = this.form.controls["namaDepan"].value,
		    namaBelakang 		: string = this.form.controls["namaBelakang"].value,
		    jenisKelamin 		: string = this.form.controls["jenisKelamin"].value,
		    alamat 				: string = this.form.controls["alamat"].value,
		    noTelp 				: string = this.form.controls["noTelp"].value,
		    email 				: string = this.form.controls["email"].value;

		if(this.isEdited)
		{
			this.updateData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
		}
		else
		{
			this.inputData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
		}
	}

	resetFields() : void 
	{
		this.biodataNamaDepan 		= "",
		this.biodataNamaBelakang 	= "",
		this.biodataJenisKelamin 	= "",
		this.biodataAlamat 			= "",
		this.biodataNoTelp 			= "",
		this.biodataEmail 			= "";

	}

	sendNotification(message) : void 
	{
		let notification = this.toastCtrl.create({
			message		: message,
			duration	: 3000
		});
		notification.present();
	}
}