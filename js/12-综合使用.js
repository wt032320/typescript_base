"use strict";
/*
  功能：定义一个操作数据库的库 支持 Mysql Mssql MongoDb
  要求：Mysql MsSql mongDB 功能一样 都有 add update delete get 方法
  注意：约束统一的规范以及代码重用
  解决方案： 需要约束规范所以要定义接口，需要代码重用所以用到泛型
*/
// 定义一个操作mysql的类  注意：要实现泛型接口 这个类也应该是个泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDB;
}());
// 定义一个操作mssql数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDb;
}());
// 操作用户表  定义一个User类和数据表做映射
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var us = new Users();
us.username = '梨花';
us.password = '123456';
var mysql = new MysqlDB();
mysql.add(us);
