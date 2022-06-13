const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');

const createOrder = async function(req, res){
  let data = req.body;
  let userId = await userModel.findById(req.body.userId);
  let productId = await userModel.findById(req.body.productId);
  let savedData;

  if(!data.userId){
    res.send({msg: "User id needed."});
  }
  else if(!userId){
    res.send({msg: "WARNING: Invalid User ID."});
  }
  else if(!data.productId){
    res.send({msg: "Product id needed."})
  }
  else if(!productId){
    res.send({msg: "WARNING: Invalid Product ID."});
  }
  else{
    savedData = await orderModel.create(data);

    if(req.headers['isFreeAppUser']){
      await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
    }
    else{
      let productPrice = productId.price;
      if(userId.balance >= productPrice){
        await userModel.updateOne({ _id: data.userId }, { $inc: { balance: -productPrice } }, { new: true });
        await orderModel.updateOne({ _id: savedData._id }, { $set: { amount: productPrice } }, { new: true });
        res.send({msg: savedData});
      }
      else{
        res.send({ msg: "The user doesn't have enough balance." });
      }
    }
  }
}

module.exports.createOrder = createOrder;