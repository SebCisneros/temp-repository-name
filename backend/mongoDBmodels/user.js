const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type: String,
    },
    friendList:{
        type: Array
    }
});

module.exports = mongoose.model("user", userSchema, "basic_info")