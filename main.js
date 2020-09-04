const ex = require('express');

const obj = ex();
const c = require('cors');

obj.use(c());
obj.use(ex.json());

const data = require('./data');

obj.get('/enter', async (req, res) => {

    try {
        const place = req.query;
        await data.insertval(place);

        res.json({ msg: "success" })
    } catch (err) {
        res.json({ msg: "fail" })
    }

});



obj.listen(8080);