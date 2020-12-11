"use strict";
/*
  命名空间和模块的区别
      命名空间：内部模块，主要用于组织代码，避免命名冲突 命名空间中的属性，方法，类是私有的 在命名空间外使用时需要export
      模块：    ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
// 命名空间A
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5403\u732B\u7CAE");
        };
        return Cat;
    }());
})(A || (A = {}));
var dog = new Dog('小狗');
dog.eat();
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
var cat = new B.Cat('小花');
cat.eat();
