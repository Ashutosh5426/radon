const jwt = require('jsonWebToken');
// const userModel = require('../models/userModel');

const mid = async function(req, res, next){
  try{
    let token = req.headers["x-Auth-token"];
  if (!token){ token = req.headers["x-auth-token"]};

  if (!token) {return res.send({ status: false, msg: "token must be present" })};

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  else
    next();
  }
  catch(err){
    console.log(err.message);
  }
}

const authorize = async function(req, res, next){
  try{
    let token = req.headers["x-Auth-token"];
  if (!token){ token = req.headers["x-auth-token"]};

  if (!token) {return res.send({ status: false, msg: "token must be present" })};

  let decodedToken = jwt.verify(token, "functionup-radon");
  let userId = req.params.userId;
  if(decodedToken.userId===userId){
    next()
  }
  else{
    res.send({
      status: false,
      msg: "Cannot perform operation on others' data."
    })
  }
  }
  catch(err){
    console.log(err.message);
  }
  // next();
}

module.exports.mid = mid;
module.exports.authorize = authorize




// const jwt = require("jsonwebtoken");
// const mid = function(req, res, next){
    
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });
  
  
//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself

// // Check if the token present is a valid token
// // Return a different error message in this case
//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//     else{
//         next()
//     }
// }

// module.exports.mid = mid
