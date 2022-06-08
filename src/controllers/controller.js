const bookModel = require('../models/bookModel');
const authorModel = require('../models/authorModel');

const createBook = async (req, res) => {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send({msg: savedData});
}

const createAuthor = async (req, res) => {
  let data = req.body;
  let savedData = await authorModel.create(data);
  res.send({msg: savedData});
}

const booksByChetanBhagat = async (req, res) => {
  let data = await authorModel.findOne({authorName: "Chetan Bhagat"}).select({author_id: 1, _id: 0});
  let author_id = data.author_id;
  let bookData = await bookModel.find({author_id}).select({name: 1, _id: 0})
  res.send({msg: bookData});
}

const authorOfTwoStates = async (req, res) => {
  let data = await bookModel.findOne({bookName: "Two States"}).select({author_id: 1, _id: 0});
  let author_id = data.author_id;
  let author = await authorModel.find({author_id}).select({author_name: 1, _id: 0});
  res.send({msg: author});
}

const bookBtw50_100 = async (req, res) => {
  let data = await bookModel.find( { price : { $gte: 50, $lte: 100} }).select({name: 1, author_id: 1, _id: 0});
  let dataArray = [];
  data.map( async (object, index) => {
    let element = await authorModel.findOne({author_id: object.author_id}).select({author_name: 1, _id: 0});
    dataArray.push(element);
    if(index === data.length-1){
      res.send(dataArray);
    }
  })
}

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.booksByChetanBhagat = booksByChetanBhagat;
module.exports.authorOfTwoStates = authorOfTwoStates;
module.exports.bookBtw50_100 = bookBtw50_100;