const express = require('express');
const router = express();
const path = require('path');
const passport = require('passport')
const session = require('express-session');

require('../helpers/auth')
const frontPath = path.join(__dirname, '../../' , 'Frontend', 'Html' )

function isLoggedIn(req,res,next) {
    req.user ? next() : res.sendStatus(401)
}

router.use(session({secret:'KEY'}))
router.use(passport.initialize())
router.use(passport.session())


router.get(`/`,(req,res)=>{
    res.sendFile(frontPath+'/login.html')
})
router.get(`/auth/google`,
    passport.authenticate('google',{
        scope:['email','profile']
    })
)
router.get(`/google/callback`,
    passport.authenticate('google',{
        successRedirect:'/protected',
        failureRedirect:'/auth/failure'
    })
)
router.get('/auth/failure',(req,res)=>{
    res.send("fail")
})

router.get('/protected', isLoggedIn ,(req,res)=>{
    // update logged in here
    // console.log(req.user.displayName);
    res.redirect('/list')
})

router.get('/logout',(req,res)=>{
    req.logOut(()=>{
        res.send("logged out")
    })
})



module.exports = router