import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TWITTER_KEY, TWITTER_SECRET_KEY, BEARER_TOKEN } from "../../config";


function TwitterCall() {
    const [twitterHead, setRedditHead] = useState('');

    const twitterURL = "https://stream.twitter.com/1.1/";

    const twitterKey = TWITTER_KEY;
    const twitterSecretKey = TWITTER_SECRET_KEY;
    const bearerToken = BEARER_TOKEN;
    
    // useEffect(() => {
    //   axios({
    //     method: "get",
    //     url: twitterURL,
    //   }).then((res) => {
    //     console.log(res)
    //     ;
    //   });
    // }, []);
    

        return (
            <div className="App">
                    test
            </div>
        );
    
}

export default TwitterCall;
