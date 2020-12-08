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
// 静态属性 静态方法
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run1 = function () {
        alert(this.name + "\u5728\u5403\u996D");
    };
    Person2.prototype.work = function () {
        alert(this.name + "\u5728\u5DE5\u4F5C");
    };
    Person2.fly = function () {
        alert("\u6211" + this.age + "\u5C81\u4E86"); // 但是可以使用静态属性
    };
    Person2.age = 20; //静态属性
    return Person2;
}());
var pe = new Person2('小米');
pe.run1(); // 调用实例方法
Person2.fly(); // 调用静态方法
alert(Person2.age); // 调用静态属性
// 2. 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5403\u8089";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "\u5403\u8001\u9F20";
    };
    return Cat;
}(Animal));
// 3.抽象类/抽象方法
// typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准  标准：Botany 这个类要求它的子类必须包含 effect 方法
var Botany = /** @class */ (function () {
    function Botany(name) {
        this.name = name;
    }
    return Botany;
}());
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    Tree.prototype.effect = function () {
        alert(this.name + "\u80FD\u906E\u9633");
    };
    return Tree;
}(Botany));
var Flower = /** @class */ (function (_super) {
    __extends(Flower, _super);
    function Flower(name) {
        return _super.call(this, name) || this;
    }
    Flower.prototype.effect = function () {
        alert(this.name + "\u80FD\u89C2\u8D4F");
    };
    return Flower;
}(Botany));
var tree = new Tree('树');
tree.effect();
