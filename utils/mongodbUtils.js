
// var dburl = require("../config").db;//数据库地址
// var mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;
// exports.connect = function(callback) {
//     mongoose.connect(dburl);
// }
// exports.mongoObj = function(){
//     return 	mongoose;
// }
//
// /// create a connection to the DB
// exports.CreateConnection=function(callback,returnFunc){
//     var connection = mongoose.createConnection(dburl);
//     connection.on('open', function() {
//         callback(connection,Admin,returnFunc);
//     });
// }

var config = require("../config");
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = config.db; //# 数据库为
var COLLECTION_NAME =config.collection_name;


exports.MongoClient = function(callback,returnFunc){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        if(err){
            console.log("连接数据库异常");
            return;
        }
        console.log("连接成功！");
        callback(db,db.collection(COLLECTION_NAME));
    });
};


