// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { API_KEY, API_SECRET_KEY, BEARER_TOKEN } from "../config";

// function TwitterCall() {
//   const Twitter = require("twitter");

//   const [twitterHead, setTwitterHead] = useState("");
//   const apiKey = API_KEY;
//   const secretKey = API_SECRET_KEY;
//   const bearerToken = BEARER_TOKEN;

//   const twitterURL = "https://api.twitter.com/2/tweets";
//   const client = new Twitter({
//     consumer_key: apiKey,
//     consumer_secret: secretKey,
//     bearer_token: bearerToken,
//   });

//   // Twitter HTTP request
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: twitterURL,
//       dataType: "json",
//       headers: {
//         Authorization: `${client.bearerToken}`,
//       },
//       params: {
//         q: 'pizza'
//       }
//     }).then((res) => {
//       console.log(res.data.data);
//       console.log("is this working?")
//     });
//   }, []);

//   return <div className="App"></div>;
// }

// export default TwitterCall;
