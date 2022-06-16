const userModel = require("../models/userModel");
const jwt = require("jsonWebToken");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    } else {
      res.status(400).send({ msg: "Invalid Request" });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const loginUser = async function (req, res) {
  try {
    let email = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: email, password: password });

    if (!user) {
      res.send({
        status: false,
        msg: "username or password is not found",
      });
    }

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );

    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
    console.log(token);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(201).send({ status: true, data: userDetails });
  }
  catch(err){
    res.status(400).send({msg: err});
  }
};

const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findOne({ userId });
    console.log(user);
    if (!user) {
      return res.status(404).send("No such user exists");
    }

    let userData = req.body;

    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(201).send({ status: updatedUser, data: updatedUser });
  }
  catch(err){
    err.message = "This email is already in use.";
    res.status(401).send({msg: err.message});
  }
};

const deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send("No such user exists");
    }

    // let userData = req.body;
    await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true }
    );
    res.status(201).send({data: "Your account is deleted." });
  }
  catch(err){
    res.status(403).send({msg: err.message});
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
