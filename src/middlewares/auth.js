const jwt = require('jsonWebToken');
// const userModel = require('../models/userModel');

const mid = async function(req, res, next){
  try{
    let token = req.headers["x-Auth-token"];
  if (!token){ token = req.headers["x-auth-token"]};

  if (!token) {return res.status(401).send({ status: false, msg: "token must be present" })};

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });
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

  if (!token) {return res.status(401).send({ status: false, msg: "token must be present" })};

  let decodedToken = jwt.verify(token, "functionup-radon");
  let userId = req.params.userId;
  if(decodedToken.userId===userId){
    next()
  }
  else{
    res.status(403).send({
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