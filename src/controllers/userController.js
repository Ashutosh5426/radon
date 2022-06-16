const userModel = require('../models/userModel');
const jwt = require('jsonWebToken');


const createUser = async function(req, res){
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({msg: savedData});
}

const loginUser = async function (req, res){
  let email = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({emailId: email, password: password});

  if(!user){
    res.send({
      status: false,
      msg: 'username or password is not found'
    })
  }
  // let token = jwt.sign(
  //   {
  //     userId: user._id.toString(),
  //     batch: 'radon',
  //     organisation: 'functionUp'
  //   },
  //   "functionUp-radon"
  // );
  // res.setHeader('x-auth-token', token);
  // res.send({ status: true, token: token });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
  console.log(token);
}

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
    // let user = await userModel.findById(userId);
    let user = await userModel.findOne({userId});
    console.log(user);
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
    
    if (!user) {
      return res.send("No such user exists");
    }
  
    // let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id : userId }, {isDeleted: true});
    res.send({ status: updatedUser, data: updatedUser });
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;