"use strict";
/*
  装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
  通俗的讲装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
  常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器
  装饰器的写法：普通装饰器(无法传参) 装饰器工厂(可传参)
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.类装饰器：类装饰器在类声明之前被声明 类装饰器应用于类构造函数 类装饰器应用于类构造函数，修改或替换类定义 传入一个参数
// 1.1 普通装饰器(不可传参)
function logClass(params) {
    // console.log(params) // params就是当前类
    params.prototype.apiUrl = 'xxx'; //动态扩展的属性
    params.prototype.run = function () {
        console.log('爱吃冰激淋');
    };
}
// 用装饰器装饰类
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
// 1.2 装饰器工厂 (可传参)
function logIn(params) {
    return function (target) {
        // console.log(target)  // 当前类
        // console.log(params)  // 传入的参数
        target.prototype.apiUrl = params;
        target.prototype.eat = function () {
            console.log('hhhh');
        };
    };
}
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.prototype.getData = function () {
    };
    Http = __decorate([
        logIn('hello')
    ], Http);
    return Http;
}());
var h = new Http();
console.log(h.apiUrl);
h.eat();
// 1.3 重载类的构造函数和方法
function log(target) {
    // console.log(target)
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的数据';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + 'ssssss';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var Hp = /** @class */ (function () {
    function Hp() {
        this.apiUrl = '我是构造函数里的apiUrl';
    }
    Hp.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    Hp = __decorate([
        log
    ], Hp);
    return Hp;
}());
var d = new Hp();
d.getData();
// 2.属性装饰器
// 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
//          1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//          2. 成员的名字
// 类装饰器
function logIns(params) {
    return function (target) {
        // console.log(target)
        // console.log(params)
    };
}
// 属性装饰器
function logProperty(params) {
    return function (target, attr) {
        // console.log(target) // 当前类的原型对象
        // console.log(attr)  // 属性名称
        target[attr] = params;
    };
}
var Https = /** @class */ (function () {
    function Https() {
    }
    Https.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('http://www.baidu.com')
    ], Https.prototype, "url", void 0);
    Https = __decorate([
        logIns('xxxx')
    ], Https);
    return Https;
}());
// 3.方法装饰器
// 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
// 方法装饰器会在运行时传入下列三个参数：
//       1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//       2. 成员的名字
//       3. 成员的属性描述符
function get(params) {
    return function (target, methodName, desc) {
        console.log(target); //类的原型对象
        console.log(methodName); // 方法名称
        console.log(desc); // 方法的描述
        target.run = function () {
            console.log('阿三士大夫的');
        };
        // 修改装饰器的方法 把装饰器方法里传入的所有参数改为string类型
        // 1.保存当前的方法
        var oMethod = desc.value;
        // 2.修改
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
var HttpClients = /** @class */ (function () {
    function HttpClients() {
    }
    HttpClients.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        get('http://www.google.com')
    ], HttpClients.prototype, "getData", null);
    return HttpClients;
}());
// 4 装饰器的执行顺序
// 属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器
// 如果有多个相同的装饰器 它会先执行后面的
