// Connect Node to MySQL
const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "0hShit!!",
        database: "burgers_db"
    });
}

connection.connect((err) => {
    if(err) {
        console.log(`‼ Error connecting: ${err.stack} ☹️`);
        return;
    } else {
        console.log(`📘✨Connected as ID: ${connection.threadId}`);
    }
});

module.exports = connection;