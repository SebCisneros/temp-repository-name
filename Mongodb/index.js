const { MongoClient } = require("mongodb");

const DB_HOST = "Palm5"
const DB_PASSWORD = "cse442palm5"

const DB_URL = "mongodb+srv://" + DB_HOST + ":" + DB_PASSWORD + "@cse442-palm-5.76fkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// sample code with sample database which will be deleted.
async function run() {
  try {
    await client.connect();
    // collection
    const database = client.db('sample_mflix');
    // document
    const movies = database.collection('comments');
    // Query for comments with author name? I think.
    const query = { name : 'Mercedes Tyler' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
