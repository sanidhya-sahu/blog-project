const express = require("express")
const cors = require('cors')
const session = require("express-session");

const BlogRoute = require('./Router/blogRoute')
const UserRoute = require('./Router/userRoute')

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

app.use(`/`, BlogRoute , UserRoute )

app.listen(80, () => { console.log("running on http://127.0.0.1/") })