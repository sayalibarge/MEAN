let fs = require("fs");
//error
let Promise = require("bluebird");

Promise.promisifyAll(fs);

const filePath = "/Users/sayali/Desktop/MEAN/temp.txt";
fs.readFileAsync(filePath, { encoding: "utf-8" })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });