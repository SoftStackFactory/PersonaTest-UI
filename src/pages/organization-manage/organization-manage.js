"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var lobby_1 = require('../lobby/lobby');
/**
 * Generated class for the OrganizationManagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrganizationManagePage = (function () {
    function OrganizationManagePage(navCtrl, navParams, emailComposer, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        //Variables to store organization and user information
        this.organization = {};
        this.organizationName = "SoftStack Factory";
        this.organizationLogo = "placeholder";
        this.userEmail = "Peter@SoftStack.org";
    }
    OrganizationManagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizationManagePage');
    };
    OrganizationManagePage.prototype.submitChanges = function (form) {
        //generate email requesting to administrator
        if (form.invalid) {
            console.log("No Change Email to send.");
            return alert("Please make changes before submitting.");
        }
        else {
            var email = {
                to: 'administrator',
                attachments: [
                    'file://img/logo.png',
                ],
                subject: this.organizationName + ' Change Request',
                body: 'changes requested by ' + this.userEmail +
                    '/n ',
                isHtml: true
            };
            console.log("Change Email Sent");
            return this.emailComposer.open(email);
        }
        //
    };
    //home button at top right
    OrganizationManagePage.prototype.goHome = function () {
        this.navCtrl.push(lobby_1.LobbyPage);
    };
    OrganizationManagePage = __decorate([
        core_1.Component({
            selector: 'page-organization-manage',
            templateUrl: 'organization-manage.html'
        })
    ], OrganizationManagePage);
    return OrganizationManagePage;
}());
exports.OrganizationManagePage = OrganizationManagePage;
