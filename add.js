const Promise = require("bluebird");
const mysql = require("mysql");
//const config = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
const data = require("./config");

let addUser = async (user) => {

    const Connection = mysql.createConnection(data.db_config);
    await Connection.connectAsync();

    //logic

    let sql = "insert into users1(username,password,mail,mobile)values(?,?,?,?)";

    await Connection.queryAsync(sql, [user.username,
    user.password,
    user.mail,
    user.mobile]);
    //console.log("connected!!");

    await Connection.endAsync();

};

let authenticateUser = async (user) => {
    const connection = mysql.createConnection(data.db_config);

    await connection.connectAsync();

    let sql = "select *from users1 where username=? and password=?";
    const results = await connection.queryAsync(sql, [
        user.username,
        user.password,
    ]);

    await connection.endAsync();

    //if (results.length == 0) {
       return results;
       // throw new Error("Invalid Credentials");
  //  }
};
//add_db({ email: "say@gmail.com", password: "1234" });

module.exports = { addUser, authenticateUser };