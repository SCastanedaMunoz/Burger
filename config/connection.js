const mysql = require("mysql");

let connnection;

if(process.env.JAWSDB_URL){
    connnection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to DB: ${err.stack}`);
        return;
    }
    console.log(`Connected to DB with ID ${connection.threadId}`);
});

module.exports = connection;