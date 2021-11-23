const MongoClient = require('mongodb').MongoClient;

const DB_HOST = "Palm5"
const DB_PASSWORD = "cse442palm5"

const DB_URL = "mongodb+srv://" + DB_HOST + ":" + DB_PASSWORD + "@cse442-palm-5.76fkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// this is created for testing. will be deleted.
// this field should be created based on the format when user presses 'sign up'
const docu = {Email: "test2@gmail.com", Firstname: "Testman2_F", LastName: "Testman2_L" , Password: "test1234"};
const name = "test2@gmail.com";
const test_friend = {User: "test4@gmail.com"};

// Add user
// check it is duplicated or not by user email,
// then insert if it is not existed
function add_user(query) {
  MongoClient.connect(DB_URL, function(err, client) {
    if (err) throw err;
    var dbo = client.db("user_information");
    var col = dbo.collection("basic_info");
    var myq = { Email: query.Email };
    var check = col.findOne(myq);
    check.then(function(result){
      // not exist
      if(result == null){
        // add basic user information
        col.insertOne(query, function(err, res) {
          if (err) throw err;
        });
        // add new collection named username
        client.db("friend_list").createCollection(query.Email, function(err, res) {
          if (err) throw err;
          console.log("1 user added");
          client.close();
        });
        client.db("user_log").createCollection(query.Email, function(err, res) {
          if (err) throw err;
          console.log("1 user added");
          client.close();
        });
        var new_user = {log: query.Email + " sign up!"};
        add_log(query.Email, new_user);
      }
      // exist
      else {
        console.log("It already exists");
        client.close();
      }
    });
  });
}

//add_user(docu);

//Remove user
async function remove_user(username) {
  try {
    await client.connect();
    const dbo = client.db("user_information");
    const col = dbo.collection("basic_info");

    const removed = {Email: username};
    const result_1 = await col.deleteOne(removed);
    const result_2 = await client.db("friend_list").collection(username).drop();
    const result_3 = await client.db("user_log").collection(username).drop();

  } finally {
    await client.close();
  }
}

//remove_user(name);

//Add friend
//need username and requested friend username as parameters
async function add_friend(username, query) {
  try {

    await client.connect();
    const dbo = client.db("friend_list");
    const col = dbo.collection(username);

    const option = { upsert: true };

    //cannot add himself
    if(username != query.User){
      const update = {$set: query};
      const result_1 = await col.updateOne(query, update, option);
      const new_friend = {log: query.User + " " + "is added to" + " " + username + "'s friend list"};
      await add_log(username, new_friend);
    }
  } finally {
    await client.close();
  }
}

//add_friend(name, test_friend);

//Remove friend
async function remove_friend(username, query) {
  try {

    await client.connect();
    const dbo = client.db("friend_list");
    const col = dbo.collection(username);

    const result = await col.deleteOne(query);

    const delete_friend = {log: query.User + " " + "is removed from" + " " + username + "'s friend list"};
    await add_log(username, delete_friend);

    console.log("1 friend is removed");

  } finally {
    await client.close();
  }
}

//remove_friend(name, test_friend);

//Add user's log to user's log db
//need username and log message
async function add_log(username, query) {
  try {

    await client.connect();
    const dbo = client.db("user_log");
    const col = dbo.collection(username);

    const option = { upsert: true };

    //cannot add himself
    if(username != query.User){
      const update = {$set: query};
      const result = await col.updateOne(query, update, option);
    }
  } finally {
    await client.close();
  }
}

module.exports = {add_user, remove_user, add_friend, remove_friend, add_log};
