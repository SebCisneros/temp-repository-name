const express = require('express')

const router = express.Router();

const user = require('../mongoDBmodels/user');

router.post('/', async (request, res) => {
    const userInfo = new user ({
      userName: request.body.userName
    });
    userInfo.save();

    res.send("Done")
  });

router.post("/addFriend", async (request, res) => {
  user.findOneAndUpdate({Email:request.body.email},{FirstName:"Ali"},{upsert:true})
 
  res.send("Done")
});

router.get("/getUser", async (request, res) => {
 user.find()
   .then((users) => res.send(users))
   .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;