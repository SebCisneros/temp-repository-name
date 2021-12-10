const express = require("express");

const router = express.Router();

const user = require("../mongoDBmodels/user");

router.post("/", async (request, res) => {
  const userInfo = new user({
    userName: request.body.userName,
  });
  userInfo.save();

  console.log(userInfo);
});

router.post("/addFriend", async (request, res) => {
  doc = await user.findOne({ "userName": request.body.userName })
  doc.friendList.push(request.body.friend)
  doc.save()
});

router.post("/removeFriend", async (request, res) => {
  doc = await user.findOne({ "userName": request.body.userName })
  doc.friendList.pull(request.body.friend)
  doc.save()
});

router.post("/getFriendList", async (request, res) => {
  doc = await user.find({ userName: request.body.userName });
  res.send(doc[0].friendList);
});

router.get("/getAllUsers", async (request, res) => {
  user.find({}, function (err, users) {
    var userMap = [];

    users.forEach(function (user) {
      userMap.push(user.userName);
    });

    res.send(userMap);
  });
});

module.exports = router;