const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

//1.config of database(username,password)
const config = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "dbt"
};

let insertval = async (q) => {
    //2.create connection
    let con = mysql.createConnection(config);

    await con.connectAsync();

    //3.query

    let sql = "insert into customers(cnum,Sname,city) values(?,?,?)";//?- for dynamic

    await con.queryAsync(sql, [q.cnum, q.Sname, q.city]);
    await con.endAsync();


};

module.exports = { insertval };