const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./module");

let readAllUser = async () => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "select *from student";
    const result = await connection.queryAsync(sql);

    await connection.endAsync();

    return result;

};

module.exports = { readAllUser };