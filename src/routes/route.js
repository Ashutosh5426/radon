const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
    let data = req.body;
    let isSame = false;
  players.forEach(player => {
      if(player.name == data.name){
        isSame = true;
      }

  });
  if(!isSame){
      players.push(data);
  }
console.log(data);
  res.send(  { data: players , status: true }  );
});

module.exports = router;
