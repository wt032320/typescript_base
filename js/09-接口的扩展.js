"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + " like " + code);
    };
    return Programmer;
}());
// Web类继承Programmer类 同时实现 Man接口
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.sleep = function () {
        console.log(this.name + "\u559C\u6B22\u7761\u89C9");
    };
    Web.prototype.work = function () {
        console.log(this.name + "\u559C\u6B22\u5DE5\u4F5C");
    };
    return Web;
}(Programmer));
var ming = new Web('小明');
ming.work();
ming.coding('写js');
