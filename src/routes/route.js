const express = require('express');

const router = express.Router();

router.get("/test-me", function (req, res, next) {
  res.send("My first ever api!");
  next();
})

const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    // logic
    let loggedIn = false

    if (loggedIn== true) { 
        console.log( "OK LOGGED IS IS TRUE NOW")
        next ()
    }
    else {
        res.send ("Please login or register")
    }
}

router.get("/basicRoute", mid1);



module.exports = router;