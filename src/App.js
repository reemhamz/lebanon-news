import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import axios from "axios";
import TwitterCall from "./components/TwitterCall";

function App() {
  const [redditHead, setRedditHead] = useState([]);
  const [redditTitle, setRedditTitle] = useState("");
  const [redditFlair, setRedditFlair] = useState("");
  const [homeLink, setHomeLink] = useState("https://reddit.com");
  const redditURL = `https://www.reddit.com/r/lebanon.json`;
  useEffect(() => {
    axios({
      method: "get",
      url: redditURL,
    }).then((res) => {
      // console.log(res.data.data)
      setRedditHead(res.data.data.children);
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
      <h1>Lebanews 🌲📰</h1>
      <TwitterCall />
      <ul class="rLebanonCall">
        {redditHead.map((data) => {
          // console.log(data.data.title.length);
          if (
            data.data.link_flair_text === "Politics" ||
            data.data.link_flair_text === "News Articles" ||
            data.data.link_flair_text === "Economy"
          ) {
            return (
              <>
                <a href={homeLink + data.data.permalink} target="_blank" rel="noreferrer noopener">
                  <li>
                    <span>🍃</span> {data.data.title.length < 100 ? (
                    data.data.title
                    ):
                    (
                    <span>{data.data.title.substr(0,90)}...<em>read more</em></span>
                    )}
                  </li>
                </a>
                <hr />
                
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;
