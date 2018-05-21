'use strict'

module.exports = {
    index : async (req, res, next) => {
        res.send("Index Page");
    },
    user : async (req, res, next) => {
        res.send("User Page");
    }
}