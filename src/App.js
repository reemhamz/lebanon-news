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
      <ul class="rLebanonCall">
        {redditHead.map((data) => {
          console.log(data.data);
          if (
            data.data.link_flair_text === "Politics" ||
            data.data.link_flair_text === "News Articles" ||
            data.data.link_flair_text === "Economy"
          ) {
            return (
              <>
                <a href={data.data.url}>
                  <li>
                    
                    <span>🍃</span> {data.data.title}
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
