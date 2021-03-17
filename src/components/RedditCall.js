import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function RedditCall(props) {
  const [redditData, setRedditData] = useState([]);
  const redditURL = `https://www.reddit.com/r/lebanon.json`;

  // Reddit HTTP request
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: redditURL,
      }).then((res) => {
        setRedditData(res.data.data.children);
        console.log(res);
      });
    };
    fetchData();
  }, []);

  const sendResults = () => {
    if (redditData !== "") {
      props.onChange(redditData);
      console.log("YAS");
    }
  };

  sendResults();
  return <div></div>;
}

export default RedditCall;
