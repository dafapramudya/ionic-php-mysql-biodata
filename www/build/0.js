webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBiodataModule", function() { return InputBiodataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_biodata__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputBiodataModule = (function () {
    function InputBiodataModule() {
    }
    return InputBiodataModule;
}());
InputBiodataModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__input_biodata__["a" /* InputBiodata */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__input_biodata__["a" /* InputBiodata */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__input_biodata__["a" /* InputBiodata */]
        ]
    })
], InputBiodataModule);

//# sourceMappingURL=input-biodata.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBiodata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputBiodata = (function () {
    function InputBiodata(navCtrl, http, NP, fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.isEdited = false;
        this.hideForm = false;
        this.idBiodata = null;
        this.baseURI = "http://localhost/ionic/";
        this.form = fb.group({
            "namaDepan": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "namaBelakang": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "jenisKelamin": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "alamat": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "noTelp": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    InputBiodata.prototype.ionViewWillEnter = function () {
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.pilihData(this.NP.get("record"));
            this.pageTitle = 'Kembali';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Input Data';
        }
    };
    InputBiodata.prototype.pilihData = function (item) {
        this.biodataNamaDepan = item.namaDepan;
        this.biodataNamaBelakang = item.namaBelakang;
        this.biodataJenisKelamin = item.jenisKelamin;
        this.biodataAlamat = item.alamat;
        this.biodataNoTelp = item.noTelp;
        this.biodataEmail = item.email;
        this.idBiodata = item.idBiodata;
    };
    InputBiodata.prototype.inputData = function (namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email) {
        var _this = this;
        var body = "key=insert&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email, type = "application/x-www-form-urlencoded;charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification('Data disimpan');
            }
            else {
                _this.sendNotification('Terdapat kesalahan!');
            }
        });
    };
    InputBiodata.prototype.updateData = function (namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email) {
        var _this = this;
        var body = "key=update&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email + "&idBiodata=" + this.idBiodata, type = "application/x-www-form-urlencoded;charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification('Data telah diupdate');
            }
            else {
                _this.sendNotification('Terdapat kesalahan!');
            }
        });
    };
    InputBiodata.prototype.hapusData = function () {
        var _this = this;
        var body = "key=hapus idBiodata=" + this.idBiodata, type = "application/x-www-form-urlencoded;charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification('Data telah dihapus');
            }
            else {
                _this.sendNotification('Terdapat kesalahan!');
            }
        });
    };
    InputBiodata.prototype.simpanData = function () {
        var namaDepan = this.form.controls["namaDepan"].value, namaBelakang = this.form.controls["namaBelakang"].value, jenisKelamin = this.form.controls["jenisKelamin"].value, alamat = this.form.controls["alamat"].value, noTelp = this.form.controls["noTelp"].value, email = this.form.controls["email"].value;
        if (this.isEdited) {
            this.updateData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
        }
        else {
            this.inputData(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
        }
    };
    InputBiodata.prototype.resetFields = function () {
        this.biodataNamaDepan = "",
            this.biodataNamaBelakang = "",
            this.biodataJenisKelamin = "",
            this.biodataAlamat = "",
            this.biodataNoTelp = "",
            this.biodataEmail = "";
    };
    InputBiodata.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    return InputBiodata;
}());
InputBiodata = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-input-biodata',template:/*ion-inline-start:"E:\project\biodata\src\pages\input-biodata\input-biodata.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n	<ion-item *ngIf="isEdited && !hideForm">\n		<button ion-button item-right color="danger" icon-right text-center block outline (click)="hapusData()">Hapus</button>\n	</ion-item>\n\n	<div *ngIf="hideForm">\n		<ion-item class="post-entry-message" text-wrap>\n			<p>Untuk mengedit atau menghapus data</p>\n			<p>Kembali ke halaman utama</p>\n		</ion-item>\n	</div>\n\n	<div *ngIf="!hideForm">\n		<form [formGroup]="form" (ngSubmit)="simpanData()">\n\n		<ion-list>\n			<ion-item-group>\n				<ion-item-divider color="light">Nama Depan</ion-item-divider>\n				<ion-item>\n					<ion-input type="text" placeholder="Nama Depan. . . " formControlName="namaDepan" [(ngModel)]="biodataNamaDepan"></ion-input>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item-group>\n				<ion-item-divider color="light">Nama Belakang</ion-item-divider>\n				<ion-item>\n					<ion-input type="text" placeholder="Nama Belakang. . . " formControlName="namaBelakang" [(ngModel)]="biodataNamaBelakang"></ion-input>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item-group radio-group formControlName="jenisKelamin" [(ngModel)]="biodataJenisKelamin">\n				<ion-item-divider color="light">Jenis Kelamin</ion-item-divider>\n				<ion-item>\n					<ion-label>Laki-Laki</ion-label>\n					<ion-radio value="Laki-Laki"></ion-radio>\n				</ion-item>\n				<ion-item>\n					<ion-label>Perempuan</ion-label>\n					<ion-radio value="Perempuan"></ion-radio>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item-group>\n				<ion-item-divider color="light">Alamat</ion-item-divider>\n				<ion-item>\n					<ion-textarea placeholder="Alamat. . . " formControlName="alamat" rows="6" [(ngModel)]="biodataAlamat"></ion-textarea>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item-group>\n				<ion-item-divider color="light">No Telepon</ion-item-divider>\n				<ion-item>\n					<ion-input type="text" placeholder="Nomor Telepon. . . " formControlName="noTelp" [(ngModel)]="biodataNoTelp"></ion-input>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item-group>\n				<ion-item-divider color="light">Email</ion-item-divider>\n				<ion-item>\n					<ion-input type="email" placeholder="Email. . . " formControlName="email" [(ngModel)]="biodataEmail"></ion-input>\n				</ion-item>\n			</ion-item-group>\n\n			<ion-item>\n				<button ion-button color="primary" icon-right text-center  block outline [disabled]="!form.valid">Simpan</button>\n			</ion-item>\n		</ion-list>\n	</form>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\project\biodata\src\pages\input-biodata\input-biodata.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], InputBiodata);

//# sourceMappingURL=input-biodata.js.map

/***/ })

});
//# sourceMappingURL=0.js.map