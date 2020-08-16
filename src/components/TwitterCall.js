import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY, API_SECRET_KEY, BEARER_TOKEN} from "../config"


function TwitterCall() {
    const [twitterHead, setTwitterHead] = useState('');
    const apiKey = API_KEY;
    const secretKey = API_SECRET_KEY;
    const bearerToken = BEARER_TOKEN;
    
    const twitterURL = "https://api.twitter.com/1.1/tweets/search/fullarchive/beirut.json"  
    
    // Twitter HTTP request
    useEffect(() => {
      axios({
        method: "POST",
        url: twitterURL,
      }).then((res) => {
        console.log(res.data.data)
        
      });
    }, []);

    return (
            <div className="App">
                
            </div>
        );
    
}

export default TwitterCall;