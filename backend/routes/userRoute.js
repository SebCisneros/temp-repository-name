const express = require('express')

const router = express.Router();

const user = require('../mongoDBmodels/user');

router.post('/', async (request, res) => {
    const userInfo = new user ({
      userName: request.body.userName
    });
    userInfo.save();

    console.log(userInfo)
  });

module.exports = router;