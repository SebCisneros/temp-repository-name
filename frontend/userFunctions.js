import mongoose from 'mongoose';

var user = mongoose.Schema({
    userName:{
        type: String
    },
    friendList:[{friendUserName: String}]
})