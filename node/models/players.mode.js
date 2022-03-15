'use strict';
var dbConn = require('./../db');

//Player object create
var Player = function(player){
  this.name           = player.name;
  this.status         = player.status ? player.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};

Player.create = function (newPlayer, result) {
    dbConn.query("INSERT INTO player set ?", newPlayer, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
};

Player.findById = function (id, result) {
    dbConn.query("Select * from player where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Player.findAll = function (result) {
    dbConn.query("Select * from player", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('player : ', res);
      result(null, res);
    }
    });
};

Player.update = function(id, player, result){
    dbConn.query("UPDATE player SET name=? WHERE id = ?", [player.name, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
    });
};

Player.delete = function(id, result){
    dbConn.query("DELETE FROM player WHERE id = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
    });
};
module.exports= Player;