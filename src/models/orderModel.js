const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
      type: ObjectId,
      ref: 'User'
    },
    prodctId: {
      type: ObjectId,
      ref: 'Product'
    },
    amount: Number,
    isFreeAppUser: {
      type: Boolean,
      default: false
    },
    date: Date
}, {timestamps: true});

module.exports = mongoose.model('Order', orderSchema);