const express = require("express");
const db_add = require("./add");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }))
app.get("/", async (req, res) => {
    try {
        const input = req.query;
        await db_add.addUser(input);
        res.json({ message: "success" });
        //const json = { message: "Success" };
        //res.json(json);
    } catch (err) {
        console.log(err);
        res.json({ message: "failure" });
        // const json = { message: "Failure" };
        // res.json(json);
    }

});



app.get("/adduser", async (req, res) => {
    try {
        // lets read the query parameter
        const input = req.query;

        // calling db logic :: async :: non blocking
        await db_add.addUser(input);
        res.json({ message: "success" });
    } catch (err) {
        res.json({ message: "failure" });
    }
});
app.get("/signup", (req, res) => {
    res.sendFile('C:/Users/sayali/Desktop/MEAN/MEAN PROJECT/clientside/signup.html');
})
app.post("/login", async (req, res) => {
    try {
        const input2 = req.body;
        console.log(input2);
        await db_add.addUser(input2);
        res.json({ message: "success" });
    } catch (err) {
       console.log(err);
        res.json({ message: "failure" });
    }


});
app.post("/login1",async(req,res) => {
    try {
        const input3 = req.body;
        console.log(input3);
      
    const result =  await db_add. authenticateUser(input3);
    if(result.length > 0){
        res.json({ message: "successfully logined " });
    }
        else if(result.length == 0 ) {
res.json({ message: "you are not authenticated user  please sign up " });
        }
    } catch (err) {
       console.log(err);
        res.json({ message: "failure" });
    }
});
app.get("/login2",(req,res) => {
     res.sendFile("C:/Users/sayali/Desktop/MEAN/MEAN PROJECT/clientside/login .html");
});
app.listen(5052);

