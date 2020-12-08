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
// 1.ts中类的定义
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
// alert(p.getName())
p.setName('lisi');
// alert(p.getName())
// ts中实现继承(extends super)
// 父类
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.run = function () {
        return this.name + "\u5728\u5403\u996D";
    };
    return Father;
}());
// 子类
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    // 当子类和父类拥有相同的方法,在调用时会优先使用子类的方法
    Son.prototype.showAge = function () {
        return this.age;
    };
    return Son;
}(Father));
var s = new Son('qiaoben', 23);
// alert(s.run())
// alert(s.showAge())
