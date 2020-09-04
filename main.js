const Promise = require("bluebird");
const mysql = require("mysql");


//promisify
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readcustomers = async () => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "cdac",
            database: "dbt",
        });

        //establish connection here
        await connection.connectAsync();

        //query
        let sql = "select *from customers";
        let result = await connection.queryAsync(sql);
        console.log(result);

        //release connection
        await connection.endAsync();
        return result;
    } catch (err) {
        console.log(err);
    }
};

readcustomers();


