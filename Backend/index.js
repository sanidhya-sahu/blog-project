const express = require("express")
const cors = require('cors')
const path = require('path');

const app = express()
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get(`/`,(req,res)=>{
    res.status(200).send("Heluuuu")
})

app.listen(80, () => { console.log("running on http://127.0.0.1/") })