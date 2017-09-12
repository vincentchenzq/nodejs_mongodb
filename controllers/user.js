"use strict";

var config = require('../config');
var userDBModel = require('../models/user.js');
var crypt = require('../utils/crypt.js');
var user =new userDBModel.Schema("user").model;
var mongoUtils = require("../utils/mongoUtils");
var mongodbUtils = require("../utils/mongodbUtils");
const loger = require("../models/loger");

exports.login = function (req, res, next) {
        loger.info("登录页面");
        res.render('login.html',{message:""});
};
exports.onLogin = function (req, res, next) {
    var mdPassword=crypt.md5(req.body.password);
     var queryObj = {userName:req.body.userName,password:mdPassword};
     mongodbUtils.MongoClient(function(db,collection){
        collection.find(queryObj).toArray(function(err, result) {
            if(err){
                loger.info("登录失败");
                res.render('./login.html',{message:"登陆失败！"});
            }else{
                if(result){
                    loger.info("登录成功");
                    res.redirect("/index");
                }else{
                    loger.info("用户名和密码错误");
                    res.render('./login.html',{message:"用户名和密码错误！"});
                }
            }
        });
     });


};
 exports.addUser = function (){
     var userEntity = new user();
     userEntity.userName=req.body.userName;
     userEntity.password=req.body.password;
     userEntity.save(function (err,userInfo){

     })
 };

exports.userList=function(req, res, next){
     user.find({},function(err,userList){
         res.render('./user/users.html',{userList:userList});

    });

};

exports.userManager = function (req,res,next){

};

