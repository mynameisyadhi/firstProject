let express = require('express');
let db = require('../config/database');
let app = express.Router();

app.get('/Add', (req, res, next) => {
    res.send("Hello World");
})

app.post('/Add', (req, res, next) => {
    console.log(req.body);
    console.log("berhasil ditambahkan");
    new Promise((resolve, reject) => {
        db.query(`INSERT INTO Items VALUES ("${req.body.id_barang}", "${req.body.nama_barang}")`, (err, data) => {
            if(data){
                resolve(data);
            }
            reject(err);
        });
    }).then((success) => {
        console.log("Data Berhasil Masuk ke DB");
    }).catch((err) => {
        console.log("Data gagal masuk ke Database");
    })
    new Promise((resolve, reject) => {
        db.query(`INSERT INTO price VALUES ("${req.body.id_barang}", ${req.body.hargaSatuan})`, (err, data) => {
            if(data){
                resolve(data);
            }
            reject(err);
        });
    }).then((success) => {
        console.log("Data Berhasil Masuk ke DB");
    }).catch((err) => {
        console.log("Data gagal masuk ke Database");
    })

    new Promise((resolve, reject) => {
        db.query(`INSERT INTO Stocks VALUES ("${req.body.id_barang}", ${req.body.stok})`, (err, data) => {
            if(data){
                resolve(data);
            }
            reject(err);
        });
    }).then((success) => {
        console.log("Data Berhasil Masuk ke DB");
    }).catch((err) => {
        console.log("Data gagal masuk ke Database");
    })
})

module.exports = app;