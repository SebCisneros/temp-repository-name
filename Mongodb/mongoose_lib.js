var mongoose = require('mongoose');

const DB_HOST = "Palm5"
const DB_PASSWORD = "cse442palm5"

const DB_URL = "mongodb+srv://" + DB_HOST + ":" + DB_PASSWORD + "@cse442-palm-5.76fkk.mongodb.net/user_information"

// make a connection
mongoose.connect(DB_URL);

// get reference to database
const db = mongoose.createConnection(DB_URL);
db.on('error', console.error.bind(console, 'connection error1:'));

const db2 = db.useDb('friend_list');
db2.on('error', console.error.bind(console, 'connection error2:'));

const db3 = db.useDb('user_log');
db3.on('error', console.error.bind(console, 'connection error3:'));

//------------------------------------------------------------------------------
// define Schema
const UserSchema = mongoose.Schema({
  Email: String,
  Firstname: String,
  Lastname: String,
  Password: String
});

const FriendSchema = mongoose.Schema({
  User: String
});

const LogSchema = mongoose.Schema({
  log: String
});

// compile schema to model
const User = db.model('user', UserSchema, 'basic_info');

// variables for testing
// a document instance
// const user1 = new User({Email: "test3@gmail.com", Firstname: "Testman3_F", Lastname: "Testman3_L" , Password: "test1234"});
// const friend1 = {User: "Steve"};
//------------------------------------------------------------------------------

// schema is user base infromation.
// Check 'user1' above
function add_user(schema) {
  db.once('open', function() {
      console.log("Connected to add_user");

      User.countDocuments({Email: schema.Email}, function (err, count){
        if(count <= 0){
          //document not exists });
          //save model to database
          schema.save(function (err, user) {
            if (err) return console.error(err);

            console.log(user.Email + " saved to user_information collection.");

            // Create freind_list coleection of this user
            const Friend = db2.model('friend', FriendSchema, schema.Email);

            // Add log
            // create log colltion of this user
            const Log =  db3.model('log', LogSchema, schema.Email);
            const new_log = new Log({log: "test3@gmail.com sign up!"});

            new_log.save(function (err, ele) {
              if (err) return console.error(err);
              console.log(ele.log);
            });
          });
        }
        else {
          console.log("Duplicated!!!");
        }
      });
  });
}

//add_user(user1);

//schema is as same as schema in the add_user
//this funtion will be used when user leaves
function remove_user(schema) {
  db.once('open', function() {
    console.log("Connected to remove_user");

    User.find({Email: schema.Email}).deleteOne().exec();
    db2.dropCollection(schema.Email, function(err, result) {
      if (err) return console.error(err);
      console.log("Friend list is deleted");
    });
    db3.dropCollection(schema.Email, function(err, result) {
      if (err) return console.error(err);
      console.log("Log collection is deleted");
    });
  });
}

//remove_user(user1);

// schema is user's base information like pervious two functions
// frined format is just 'friends = {User: name}' not schema form
function add_friend(schema, friends) {
  db2.once('open', function () {
    console.log("Connected to add_friend");

    const Friend = db2.model('friend', FriendSchema, schema.Email);
    const new_friend = Friend(friends);

    //cannot add himself
    if(schema.Email != friends.User){
      new_friend.save(function (err, ele) {
        if (err) return console.error(err);
        console.log(ele.User);

        // Add log
        const Log =  db3.model('log', LogSchema, schema.Email);
        const new_log = new Log({log: friends.User + " " + "is added to" + " " + schema.Email + "'s friend list'"});

        new_log.save(function (err, ele) {
          if (err) return console.error(err);
          console.log(ele.log);
        });
      });
    }
  });
}

//add_friend(user1, friend1);

//this functions' parameters are same as add_friend
function remove_friend(schema, friends) {
  db2.once('open', function () {
    console.log("Connected to remove_friend");

    const Friend = db2.model('friend', FriendSchema, schema.Email);
    Friend.find({Email: schema.Email}).deleteOne().exec();
  });
  // Add log
  const Log =  db3.model('log', LogSchema, schema.Email);
  const new_log = new Log({log: friends.User + " " + "is removed from" + " " + schema.Email + "'s friend list'"});

  new_log.save(function (err, ele) {
    if (err) return console.error(err);
    console.log(ele.log);
  });
}

//remove_friend(user1, friend1);

//not used
//function add_log(query){
//  db3.once('open', function() {
//      console.log("Connected to log");
//      // save model to database
//      query.save(function (err, ele) {
//        if (err) return console.error(err);
//        console.log(ele.log);
//      });
//  });
//}

module.exports = {add_user, remove_user, add_friend, remove_friend};
