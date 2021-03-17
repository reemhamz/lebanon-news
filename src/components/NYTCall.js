import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function NYTCall(props) {
  const [nytData, setNytData] = useState("");
  const nytKey = "pjK1qcel7GmnyXts6CNJvBidf1u4BAhw";
  //   const secretNytKey = "hJ40UuIEmi000FSr";
  const nytURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lebanon&api-key=${nytKey}`;

  // Reddit HTTP request
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: nytURL,
      }).then((res) => {
        setNytData(res.data.response.docs);
      });
    };
    fetchData();
  }, []);

  const sendResults = () => {
    if (nytData !== "") {
      props.onChange(nytData);
      console.log("YAS");
    }
  };

  sendResults();
  return <div className="NytCall"></div>;
}

export default NYTCall;
