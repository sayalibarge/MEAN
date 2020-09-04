const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "dbt",

};

let addRecord = async () => {
    const Connection = mysql.createConnection(db_config);
    await Connection.connectAsync();

    let sql = " insert into customers(cnum,Sname,city) values (?,?,?)";
    let results = await Connection.queryAsync(sql, [3, "saee", "mumbai"]);

    await Connection.endAsync();

    return results;

};

addRecord();