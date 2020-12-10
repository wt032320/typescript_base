"use strict";
var aa = ['hhhh', 'sssss'];
console.log(aa[0]);
var ab = {
    name: '张三'
};
// 使用 implements 实现接口
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.eat = function () {
        console.log(this.name + "\u7231\u5403\u996D");
    };
    return Bird;
}());
var bird = new Bird('小花');
bird.eat();
