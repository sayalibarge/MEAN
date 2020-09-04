const Promise = require("bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "cdac",
        database: "dbt",
    });

    // connection open
    await connection.connectAsync();

    console.log("CONNECTION SUCCESS");

    // release the connection
    connection.end();
};

helloDatabase();