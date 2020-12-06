"use strict";
// 3.1 函数的定义
// es5中定义函数的方法
/*
    // 函数声明法
    function run() {
      return 'run'
    }
    // 匿名函数
    var run2 = function() {
      return 'run2'
    }
*/
// ts中定义函数的方法
// 1.函数声明法
function run() {
    return '333';
}
// 2. 匿名函数法
var fun2 = function () {
    return 1213;
};
// ts中定义方法传参
function getInfo(name, age) {
    return name + "---" + age;
}
// 没有返回值的方法
function fn() {
    console.log('3333');
}
// 3.2 方法可选参数
// es5中方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
// 注意： 可选参数必须配置到参数的最后面
function getData(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 3.3 默认参数
// es5中没办法设置默认参数，es6和ts中都可以设置默认参数
function getData1(name, age) {
    if (age === void 0) { age = 29; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 3.4 剩余参数 三点运算浮接收形参传过来的值
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
sum(1, 3, 4, 5);
