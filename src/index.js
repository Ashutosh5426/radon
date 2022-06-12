const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const route = require('./routes/route')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://AshutoshGupta:ashutosh54264850@cluster0.ukus0.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
      let dateTime=moment().format('DD.MM.YYYY HH:mm:ss')
      let ip = req.socket.remoteAddress;
      let data = `${dateTime}, ${ip}`;
        console.log(data);
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  app.use('/', route);

  
app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000))
});