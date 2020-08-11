import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import axios from "axios";

function App() {
  const [redditHead, setRedditHead] = useState('')
  const redditURL = `https://www.reddit.com/r/lebanon.json`;
  useEffect(() => {
    axios({
      method: "get",
      url: redditURL,
    }).then((res) => {
      res.data.data.children.map(getTitle => {
      
        const redditFlair = getTitle.data.link_flair_text;
        const redditTitle = getTitle.data.title;

        if (redditFlair === "Politics" || redditFlair === "News Articles") {
          console.log("this is the title", redditTitle)
          return setRedditHead(redditTitle)
        }

      })
    });
  }, [])

  return (
    <div className="App">
      <h3>
        {/* {this.redditTitle} */}
      </h3>
    </div>
  );
}

export default App;
