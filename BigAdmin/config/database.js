let mysql = require('mysql');

let connect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'TokoOmYadhi',
});

connect.connect((err, success) => {
    if(success){
        console.log("Database Connected");
    }
    else{
        console.log("failed to connect to database");
    }
})

module.exports = connect;