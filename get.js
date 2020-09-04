var express = require('express');
const { response } = require('express');
var app = express();

app.use(express.static('public'));
app.get('/get.html', function (req, res) {
    res.sendFile(__dirname + "/" + "get.html");
})

app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var Server = app.listen(8081, function () {
    var host = Server.address().address
    var port = Server.address.port

    console.log("sayali", host, port)
})
