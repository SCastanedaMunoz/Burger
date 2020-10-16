const mysql = require("mysql");

let connnection;

if(process.env.JAWSDB_URL){
    connnection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        use: 'root',
        password: '',
        database: 'burgers_db'
    });
}

connnection.connect();
module.exports = connnection;