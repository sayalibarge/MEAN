
//resolve and reject using promise
var s = new Promise(function (resolve, reject) {

    const x = "sayali";
    const y = "sayali";

    if (x == y) {
        resolve();
    } else {
        reject();
    }
});

s.then(function () {
    console.log(' both are same')
},
    function () {
        console.log("reject ")
    }
).catch(function () {
    console.log("not same")
});