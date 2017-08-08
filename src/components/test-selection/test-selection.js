"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Generated class for the TestSelectionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TestSelectionComponent = (function () {
    function TestSelectionComponent() {
        //Variable to store array of test as an array of objects and mock data (thanks Jenny)
        this.availableTests = [{ name: "Goldberg's Big Five", description: "some text" },
            { name: "Markey and Markey's", description: "some text" },
            { name: "Costa and McCrae's NEO Facets", description: "some text" },
            { name: "Johnson's 120 Item NEO", description: "some text" }];
        console.log('Hello Test Selection Component');
        /*this.availableTests =
          [{name: "Goldberg's Big Five", description: "some text"},
          {name:"Markey and Markey's", description: "some text"},
          {name: "Costa and McCrae's NEO Facets", description: "some text"},
          {name:"Johnson's 120 Item NEO", description: "some text"}];
        function(){
            for (i = 0,  len = this.availableTests.length; i < len; i++) {
              return this.testDescriptions +=
                this.availableTests[i][name] + ": " +
                this.availableTests[i][description] + "/n";
            }
            */
    }
    TestSelectionComponent = __decorate([
        core_1.Component({
            selector: 'test-selection',
            templateUrl: 'test-selection.html'
        })
    ], TestSelectionComponent);
    return TestSelectionComponent;
}());
exports.TestSelectionComponent = TestSelectionComponent;
