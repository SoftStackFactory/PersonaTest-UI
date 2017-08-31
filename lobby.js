"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var history_1 = require('../history/history');
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LobbyPage = (function () {
    function LobbyPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.testType = "personal";
        this.organizationName = "SoftStack Factory";
        this.userName = "Peter";
    }
    LobbyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LobbyPage');
    };
    LobbyPage.prototype.forWork = function () {
        console.log("Switch to Work View");
    };
    LobbyPage.prototype.forPlay = function () {
        console.log("Switch to Personal Test Selection Page");
    };
    LobbyPage.prototype.showResults = function () {
        this.navCtrl.push(history_1.HistoryPage);
        console.log("go to results page for personal tests taken");
    };
    LobbyPage.prototype.viewResults = function () {
        console.log("go to results page for organization tests available to view");
    };
    LobbyPage.prototype.manageAcc = function () {
        console.log("go to account management page");
    };
    LobbyPage.prototype.becomeOrg = function () {
        console.log("go to Organization request page");
    };
    LobbyPage = __decorate([
        core_1.Component({
            selector: 'page-lobby',
            templateUrl: 'lobby.html'
        })
    ], LobbyPage);
    return LobbyPage;
}());
exports.LobbyPage = LobbyPage;
