import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsCall(props) {
  const [newsData, setNewsData] = useState("");

  const newsKey = "6a366e78-de9a-4054-9ec0-e92a7b07ecce";
  const newsURL = `https://content.guardianapis.com/search?api-key=${newsKey}`;

  // Twitter HTTP request
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: newsURL,
        dataType: "json",
        headers: {},
        params: {
          q: "lebanon, politics, economy",
          sections: "world",
        },
      }).then((res) => {
        setNewsData(res.data.response.results);
        // console.log(res);
      });
    };
    fetchData();
  }, []);

//   console.log(newsData);
  const sendResults = () => {
    if (newsData !== "") {
        props.onChange(newsData);
    }
  };

  sendResults();

  return <div className="NewsCall"></div>;
}

export default NewsCall;
