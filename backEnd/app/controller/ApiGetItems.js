'use strict'
let db = require('../model/ApiGetItems');

module.exports = {
    getItems : async function(req, res, next){
        // describe controller
        let query = await db.findAll();
        res.json(query);
    }
}