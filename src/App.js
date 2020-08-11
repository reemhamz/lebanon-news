import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import axios from "axios";

function App() {
  const [redditHead, setRedditHead] = useState([]);
  const [redditTitle, setRedditTitle] = useState("");
  const [redditFlair, setRedditFlair] = useState("");
  const redditURL = `https://www.reddit.com/r/lebanon.json`;
  useEffect(() => {
    axios({
      method: "get",
      url: redditURL,
    }).then((res) => {
      // console.log(res.data.data)
      setRedditHead(res.data.data)
    });
  }, []);

  // useEffect(() => {
  //   setRedditFlair(redditHead.link_flair_text);
  //   if (redditFlair === "Politics" || redditFlair === "News Articles") {
  //     setRedditTitle(redditHead.title);
  //   }
  // });

  return (
    <div className="App">
      {console.log(redditHead.children)}
    </div>
  );
}

export default App;
