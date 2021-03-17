import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import axios from "axios";
import NewsCall from "./components/NewsCall";
import Title from "./components/Title";

function App() {
  const [redditHead, setRedditHead] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [showReddit, setShowReddit] = useState(true);
  const [showNews, setShowNews] = useState(false);
  // const [homeLink, setHomeLink] = useState("https://reddit.com");
  const homeLink = "https://reddit.com";

  const handleNewsCall = (news) => {
    setNewsData(news);
    console.log(news);
  };

  // Reddit HTTP request
  useEffect(() => {
    const redditURL = `https://www.reddit.com/r/lebanon.json`;
    axios({
      method: "get",
      url: redditURL,
    }).then((res) => {
      setRedditHead(res.data.data.children);
    });
  }, []);

  const showRedditView = () => {
    setShowReddit(true);
    setShowNews(false);
  };

  const showNewsView = () => {
    setShowNews(true);
    setShowReddit(false);
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={showRedditView}>r/Lebanon</button>
        <button onClick={showNewsView}>The Guardian</button>
      </div>

      <div className="articlesView">
        <Title />

        <NewsCall newsData={newsData} onChange={handleNewsCall} />
        <ul className="newsResults">
          {showReddit
            ? redditHead.map((data) => {
                // console.log(data.data.title.length);
                if (
                  data.data.link_flair_text === "Politics" ||
                  data.data.link_flair_text === "Economy"
                ) {
                  return (
                    <>
                      <a
                        href={homeLink + data.data.permalink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <li>
                          <span role="img" aria-label="falling leaves">
                            🍃
                          </span>
                          {data.data.title.length < 100 ? (
                            data.data.title
                          ) : (
                            <span>
                              {data.data.title.substr(0, 80)}...
                              <em className="readMore"> read more</em>
                            </span>
                          )}
                        </li>
                      </a>
                      <hr />
                    </>
                  );
                }
              })
            : showNews &&
              newsData.map((data) => {
                return (
                  <>
                    <a
                      href={data.webUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <li>
                        <span role="img" aria-label="falling leaves">
                          🍃
                        </span>
                        {data.webTitle}
                      </li>
                    </a>
                    <hr />
                  </>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default App;
