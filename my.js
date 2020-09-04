let obj = require("./src/data");
let HTTP = require('http');

HTTP.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    const myresponse = JSON.stringify(obj);

    res.end(myresponse);
}).listen(5600);