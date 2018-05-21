let db = require('../../config/database');
let Sequelize = require('sequelize');

const getItems = db.define('tb_barang', {
    idBarang : {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: true,
        primaryKey: true
    },
    namaBarang: {
        type: Sequelize.STRING
    },
    jumlahPerUnitBesar: {
        type: Sequelize.INTEGER
    },
    unitBesar: {
        type: Sequelize.STRING
    },
    unitBesar: {
        type: Sequelize.STRING
    },
    hargaBeli: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false, // don't make a timestamp
    freezeTableName: true // don't make a plural tables name
});



module.exports = getItems;