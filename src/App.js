import React from "react";
import { useState, useEffect } from "react";
import "./style/App.scss";
import RedditCall from "./components/RedditCall";
import NewsCall from "./components/NewsCall";
import NYTCall from "./components/NYTCall";
import Title from "./components/Title";
// import HoverIcon from "./components/HoverIcon";
import classNames from "classnames";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [nytData, setNytData] = useState("");
  const [showReddit, setShowReddit] = useState(true);
  const [showNews, setShowNews] = useState(false);
  const [showNyt, setShowNyt] = useState(false);
  const redditHomeLink = "https://reddit.com";

  const handleRedditCall = (reddit) => {
    setRedditData(reddit);
  };
  const handleNewsCall = (news) => {
    setNewsData(news);
  };

  const handleNytCall = (nyt) => {
    setNytData(nyt);
    console.log(nyt);
  };

  const showRedditView = () => {
    setShowReddit(true);
    setShowNews(false);
    setShowNyt(false);
  };

  const showNewsView = () => {
    setShowNews(true);
    setShowReddit(false);
    setShowNyt(false);
  };

  const showNytView = () => {
    setShowNyt(true);
    setShowReddit(false);
    setShowNews(false);
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
        <button
          onClick={showNytView}
          className={classNames(showNyt && "activeButton")}
        >
          New York Times
        </button>
      </div>

      <div className="articlesView">
        <Title />
        <RedditCall redditData={redditData} onChange={handleRedditCall} />
        <NewsCall newsData={newsData} onChange={handleNewsCall} />
        <NYTCall nytData={nytData} onChange={handleNytCall} />
        <ul className="newsResults">
          {showReddit
            ? redditData.map((data) => {
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
            : showNews
            ? newsData.map((data) => {
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
              })
            : showNyt &&
              nytData.map((data) => {
                return (
                  <>
                    <a
                      href={data.web_url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <li>
                        <span role="img" aria-label="falling leaves">
                          🍃
                        </span>
                        {data.headline.main}
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
