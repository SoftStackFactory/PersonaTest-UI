"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Variables to store user's search input and the date they select
        this.searchInput = "";
        this.searchDate = "";
        //Variable to store our array of test as an array of objects; Currently using mock data
        this.testList = [{ name: "Goldberg's Big Five", date: "17-3-2017" },
            { name: "Goldberg's Big Five", date: "23-11-2017" },
            { name: "Markey and Markey's", date: "2-12-2016" },
            { name: "Costa and McCrae's NEO Facets", date: "15-7-2016" },
            { name: "Johnson's 120 Item NEO", date: "30-6-2016" }];
        //Variable to store copy of our original array, because we will need to filter
        this.filteredTestList = this.testList;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        core_1.Component({
            selector: 'page-history',
            templateUrl: 'history.html'
        })
    ], HistoryPage);
    return HistoryPage;
}());
exports.HistoryPage = HistoryPage;
