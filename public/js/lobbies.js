var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "14Winonacondo!",
    database: "gamesLobbies_db"
});

connection.connect(function(err) {
    if(err) throw err;
    joinGame();
});

function joinGame() {
    var query = connection.query(
        "INSERT INTO games SET ?",
        {
            
        }

    )

}