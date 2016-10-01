"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var cloud_angular_1 = require('@ionic/cloud-angular');
var CloudSettings = ionic.cloud - angular.CloudSettings;
var CloudModule = ionic.cloud - angular.CloudModule;
var cloudSettings = {
    'core': {
        'app_id': 'APP_ID'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                IonicModule.forRoot(MyApp),
                cloud_angular_1.CloudModule.forRoot(cloudSettings)
            ],
            bootstrap: [IonicApp],
            entryComponents: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
