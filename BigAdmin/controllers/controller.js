var express = require('express');
var db = require('../config/database');

var controller = function(res){
    db.query(`select items.idBarang, items.namaBarang, stocks.jumlah, price.harga 
            from items, stocks, price 
            where items.idBarang = price.idBarang and
             items.idBarang = stocks.idBarang;`, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
    });
}

module.exports = controller;