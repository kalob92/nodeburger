// Use connection which connects Node to MySQL
const connection = require('./connection.js');

// Create the methods that will execute the necessary MySQL commands in the controllers
// These are the methods you will need to use in order to retrieve and store data in your database
// selectAll()
// insertOne()
// updateOne()

let orm = {
    // selectAll()
    selectAll: (next) => {
        var queryString = 'SELECT * FROM burgers_db.burgers';

        connection.query(queryString, (err, res) => {
            if(err) {
                throw err;
            } else {
                next(res)
            }
        });
    },
    // insertOne()
    insertOne: (col, val, next) => {
        var queryString = 'INSERT INTO burgers';

        connection.query()
    }

    // updateOne()

}


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });


module.exports = orm;