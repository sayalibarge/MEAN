const Promise = require("bluebird");
const mysql = require("mysql");

const mod = require("./module.js");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const data = require("./module");
//console.log(data);
/*
const addrecordParam = async (ID, NAME, EMAIL, ADDRESS, MOBILE) => {
    const Connection = mysql.createConnection(data);
    await Connection.connectAsync();

    let sql = " INSERT INTO STUDENT (ID,NAME,EMAIL,ADDRESS,MOBILE) VALUES (?,?,?,?,?) ";
    await Connection.queryAsync(sql, [ID, NAME, EMAIL, ADDRESS, MOBILE]);

    await Connection.endAsync();
};
*/

let addRecordParam1 = async (user) => {
    const connection = mysql.createConnection(data.DB_CONFIG);

    await connection.connectAsync();

    let sql =
        "INSERT INTO STUDENT (id, name, email, address,mobile) VALUES (?, ?,?, ?, ?)";
    const result = await connection.queryAsync(sql, [
        user.id,
        user.name,
        user.email,
        user.address,
        user.mobile,
    ]);
    console.log(result);
    await connection.endAsync();
};

module.exports = { addRecordParam1 };