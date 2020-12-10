"use strict";
/*
  泛型：泛型就是解决 类 接口 方法的复用性，以及对不特定的数据类型的支持
*/
// 6.1 泛型的定义 和泛型的函数
// 泛型： 可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// T 表示泛型，具体什么类型是调用这个方法时候决定的
function getData(value) {
    return value;
}
console.log(getData(123));
// 6.2 泛型类 ：比如有个最小数算法，需要同时支持返回数字和字符串两种类型。 通过类的泛型来实现
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 1; i < this.list.length; i++) {
            if (this.list[i] < minNum) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass(); // 实例化类 并且指定了类的T代表的是number类型
m1.add(1);
m1.add(0);
m1.add(-1);
console.log(m1.min());
var m2 = new MinClass(); // 指定类的T代表 string 类型
m2.add('a');
m2.add('z');
m2.add('x');
console.log(m2.min());
var getDate = function (value) {
    return value;
};
console.log(getDate('ssss'));
function getData1(value) {
    return value;
}
var myGet = getData1;
console.log(myGet('11111'));
