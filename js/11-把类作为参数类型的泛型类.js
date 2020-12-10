"use strict";
/*
  定义一个User的类 这个类的作用就是映射数据库字段 然后定义一个 MysqlDb的类 这个类用于操作数据库
  然后把User类作为参数传入到MySqlDb中
*/
// 操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
// 想给User表增加数据
// 1.定义一个User类和数据库进行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.password = '12233333';
var Db = new MysqlDb();
Db.add(u);
// 2.定义一个ArticleCate类 和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
// 增加操作
var z = new ArticleCate({
    title: '分类',
    desc: '1111'
});
var Db1 = new MysqlDb();
Db1.add(z);
