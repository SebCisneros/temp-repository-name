import React, { Component } from "react";
import {PlaidLink} from "react-plaid-link";
import axios from 'axios';

class Link extends Component {
  constructor() {
    super();

    this.state = {
      linkToken: "",
    };

  }


  componentDidMount = async () =>{
    var response = await axios.get("http://localhost:1000/api/create_link_token")
    this.setState({linkToken: response.data["link_token"]});
  }

  handleOnSuccess = async (public_token, metadata) => {
    // send token to client server
    console.log("Hello")
    console.log(public_token)
    var data = {
      public_token: public_token
    }
    console.log(data)
    var response = await axios.post("http://localhost:1000/exchange_public_token", data);
    console.log(response)
    //to do set accessToken into sessionStorage then move onto UI calls in other components.
    sessionStorage.setItem("accessToken", response.data["access_token"]);

  }

   
  render() {
    const {linkToken} = this.state

    return (
      
      <div>
       {linkToken.toString !== 'undefined' ? 
       <PlaidLink 
       token={linkToken.toString()} 
       env="sandbox" 
       onSuccess={this.handleOnSuccess}
       onExit={this.handleOnExit}>
         Connect Bank Account
         </PlaidLink> 
         : null
        }
      </div>
    );
  }
}

export default Link;