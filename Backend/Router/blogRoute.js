const express = require('express');
const router = express();
const blog = require('../Models/blogSchema');
const path = require('path');
const connectDB = require('../helpers/db')
const db = connectDB()
const frontPath = path.join(__dirname, '../../' , 'Frontend' )
router.get(`/list`, (req, res) => {
    blog.find({})
        .then(found => {
            if (Object.keys(found).length === 0) {
                var resp = { status: 404 }
                res.sendFile(frontPath+'/Html/index.html')
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
});

module.exports = router