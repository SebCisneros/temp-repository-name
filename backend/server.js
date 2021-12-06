const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const util = require('util');
const bodyParser = require('body-parser');
const moment = require('moment');

const usersRoute = require('./routes/userRoute')

const app = express();
const port = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use('/user', usersRoute)

// Initialize the Plaid client
const configuration = new Configuration({
    basePath: PlaidEnvironments["sandbox"],
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': "618477936f6fee0012bafbb3",
        'PLAID-SECRET': "ee70ebf5de8bf42e7728a3950fdef3",
        'Plaid-Version': '2020-09-14',
      },
    },
  });
  
  const client = new PlaidApi(configuration)



  app.post('/accounts_balance', async (req, res) => {
        console.log({
            access_token: req.body.access_token,
          })
      try {
        const balanceResponse = await client.accountsBalanceGet({
          access_token: req.body.access_token,
        });
        res.send(balanceResponse.data);
      } catch (error) {
        
        return res.json(error.response);
      }
    });
  
  
  //endpoint exchanges public token for an access token currently working on this part
  app.post('/exchange_public_token', async (request, res, next) => {
    try{
    const tokenResponse = await client.itemPublicTokenExchange({
        public_token: request.body.public_token,
      });
    res.json({
        access_token: tokenResponse.data.access_token,
        item_id: tokenResponse.data.item_id,
      });
    }
    catch(e){
        console.log(e)
    }
  
  });




app.get('/api/create_link_token', async function (request, response) {
    const configs = {
      user: {
        // This should correspond to a unique id for the current user.
        client_user_id: 'user-id',
      },
      client_name: 'Plaid Quickstart',
      products: ["transactions"],
      country_codes: ["US"],
      language: 'en',
    };
  
    
    try {
      const createTokenResponse = await client.linkTokenCreate(configs);
      response.json(createTokenResponse.data);
      console.log("Done")
    } catch (error) {
        console.log("Bad")
      prettyPrintResponse(error.response);
      return response.json(formatError(error.response));
    }
  });
const mongoURI = "mongodb+srv://Palm5:cse442palm5@cse442-palm-5.76fkk.mongodb.net/user_information?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {useNewUrlParser: true}, () =>
  console.log("Connected to mongoDB")
)

app.listen(port, () => {
console.log(`Server running on ${port}`);
});