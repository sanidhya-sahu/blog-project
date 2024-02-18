const express = require("express")
const cors = require('cors')
const path = require('path');
const connectDB = require('./helpers/db')
const blog = require('./Models/blogSchema');
const session = require("express-session");

const db = connectDB()
const app = express()

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:process.env.SESSION_SECRET
}))

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get(`/`, (req, res) => {
    blog.find({})
        .then(found => {
            if (Object.keys(found).length === 0) {
                var resp = { status: 404 }
                res.json(resp)
            }
            else {
                const foundblogs = []
                for (const obj of found) {
                    const email = obj['_doc'].email;
                    const name = obj['_doc'].name;
                    const data = obj['_doc'].data;
                    var resp = { status: 200, email: email, name: name, data: data }
                    foundblogs.push(resp)
                }
                // console.log(foundblogs)
                res.json(foundblogs)
            }
        })
        .catch(err => {
            console.error(err);
        });
})

app.listen(80, () => { console.log("running on http://127.0.0.1/") })