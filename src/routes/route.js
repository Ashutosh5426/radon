const express = require('express');
const log = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');

const router = express.Router();

router.get('/test-me', function (req, res) {
    log.welcome()
    res.send('<h1 style="text-align: center; color: maroon">My first ever api!</h1>')
});

router.get('/test-me2', function (req, res) {
    let date = helper.printDate();
    let month = helper.printMonth();
    let batchInfo = helper.getBatchInfo();
    res.send(`<h1 style="text-align: center; color: maroon">My first ever api! <br> date: ${date} month: ${month} <br> ${batchInfo}</h1>`);
});

router.get('/test-me3', (req, res) => {
  let trimmed = formatter.trim();
  let lowerCase = formatter.changeToLowerCase();
  let upperCase = formatter.changeToUpperCase();
  res.send(`<h1 style="text-align: center; color: maroon">My first ever api.<br>${trimmed}<br>${lowerCase}<br>${upperCase}</h1>`);
});

module.exports = router;