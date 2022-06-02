const express = require('express');
const myHelper = require('../util/helper')
const _ = require('underscore')

const router = express.Router();

let array = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];

router.get('/movies', function (req, res) {
    res.send(array);
});

router.get("/movies/:index", (req, res) => {
  let index = req.params['index'];
  
  if(index>3){
    res.send('ERROR! Please Provide a Valid Index Number...');
  }
  else{
    res.send(array[index]);
  }
})

router.get('/films', (req, res) => {
  result = _.map(array, function(value, index){
    return {"id": index+1, "name": value};
 });
 res.send(result);
})

router.get('/films/:filmId', (req, res) => {
  let filmId = req.params['filmId'];
  
  if(filmId>4){
    res.send('ERROR! No movie exists with this id');
  }
  else{
    res.send({
      "id": filmId,
      "name": array[filmId-1]
    });
  }
})

module.exports = router;
// adding this comment for no reason