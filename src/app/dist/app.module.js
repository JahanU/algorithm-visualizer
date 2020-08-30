"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var algorithm_visualizer_component_1 = require("./algorithm-visualizer/algorithm-visualizer.component");
var select_1 = require("@angular/material/select");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var slider_1 = require("@angular/material/slider");
var progressbar_1 = require("ngx-bootstrap/progressbar");
var router_1 = require("@angular/router");
var searching_algorithms_component_1 = require("./searching-algorithms/searching-algorithms.component");
var routes = [
    { path: 'algorithm', component: algorithm_visualizer_component_1.AlgorithmVisualizerComponent },
    { path: 'searching', component: searching_algorithms_component_1.SearchingAlgorithmsComponent },
    { path: '', redirectTo: '/algorithm', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, algorithm_visualizer_component_1.AlgorithmVisualizerComponent, searching_algorithms_component_1.SearchingAlgorithmsComponent],
            imports: [
                platform_browser_1.BrowserModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                slider_1.MatSliderModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                progressbar_1.ProgressbarModule.forRoot(),
                router_1.RouterModule.forRoot(routes),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
