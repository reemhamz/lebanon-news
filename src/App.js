import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import axios from "axios";
import RedditCall from "./components/RedditCall";
import NewsCall from "./components/NewsCall";
import Title from "./components/Title";
// import HoverIcon from "./components/HoverIcon";
import classNames from "classnames";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [showReddit, setShowReddit] = useState(true);
  const [showNews, setShowNews] = useState(false);
  // const [redditHomeLink, setHomeLink] = useState("https://reddit.com");
  const redditHomeLink = "https://reddit.com";

  const handleRedditCall = (reddit) => {
    setRedditData(reddit);
  };

  const handleNewsCall = (news) => {
    setNewsData(news);
  };
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
        <button
          onClick={showRedditView}
          className={classNames(showReddit && "activeButton")}
        >
          r/Lebanon
        </button>
        <button
          onClick={showNewsView}
          className={classNames(showNews && "activeButton")}
        >
          The Guardian
        </button>
      </div>

      <div className="articlesView">
        <Title />
        <RedditCall redditData={redditData} onChange={handleRedditCall} />
        <NewsCall newsData={newsData} onChange={handleNewsCall} />
        <ul className="newsResults">
          {showReddit
            ? redditData.map((data) => {
                console.log(data.data.title);
                if (
                  data.data.link_flair_text === "Politics" ||
                  data.data.link_flair_text === "Economy"
                ) {
                  return (
                    <>
                      <a
                        href={redditHomeLink + data.data.permalink}
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
