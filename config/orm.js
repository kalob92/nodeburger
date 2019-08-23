// Use connection which connects Node to MySQL
const connection = require('../config/connection');

// Create the methods that will execute the necessary MySQL commands in the controllers
// These are the methods you will need to use in order to retrieve and store data in your database
// selectAll()
// insertOne()
// updateOne()
function printQuestionMarks(num, double) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      if (double) {
        arr.push("??");
      } else {
        arr.push("?");
      }
    }
  
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
}

return arr.toString();
}

const orm = {
    // SELECT ALL
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },
    // INSERT ONE
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ??";

        queryString += " (";
        queryString += printQuestionMarks(vals.length, true);
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length, false);
        queryString += ") ";

        console.log(queryString);
        console.log([table].concat(cols).concat(vals))
        connection.query(
            queryString,
            [table].concat(cols).concat(vals),
            function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
            }
    );
    },
    // UPDATE ONE
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + "??";

        queryString += " SET ";
        queryString += "?";
        queryString += " WHERE ";
        queryString += "?";

        let condProp = Object.keys(condition)[0];
        let condVal = condition[condProp];

        console.log(queryString);
        connection.query(
            queryString,
            [table, objColVals, condition],
            function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
            }
        );
    }
}


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });


module.exports = orm;