"use strict";
/*
  接口的作用：在面向对象的编程中，接口是一种 规范的定义，它定义了行为和动作的规范，在程序设计里面
  接口起到了一种限制和规范的作用，接口定义了某一批类所需要遵守的规范，接口不关心这些类内部状态数据
  也不关心这些类里方法实现的细节，它只规定这批类里面必须提供某些方法，提供这些方法的类就可以满足实
  际需要。Typescipt中的接口类似于java,同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等
*/
function printName(name) {
    console.log(name.firstName + "-----" + name.secondName);
}
var obj = {
    firstName: '小明',
    secondName: '张小明',
    age: 23
};
printName(obj);
function printInfo(info) {
    console.log(info.secondName + "\u4ECA\u5E7420\u4E86");
}
var info = {
    firstName: 'lili',
    secondName: 'lihua'
};
printInfo(info);
function getInfos(student) {
    if (student.age) {
        console.log(student.name + "---" + student.age);
    }
    else {
        console.log("" + student.name);
    }
}
// 参数的顺序可以不一样 但是参数的名称和类型应与接口规定的一致
var s1 = {
    name: 'lihhh',
    age: 11
};
getInfos(s1);
