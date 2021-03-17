import React from "react";
import "../style/App.scss";

function Title() {
  return (
    <>
      <h1>
        Lebanews
        <span role="img" aria-label="cedar tree">
          🌲
        </span>
        <span role="img" aria-label="news paper">
          📰
        </span>
      </h1>
      <h2>
        Curated list of recent news articles talking about Lebanon's politics
        and economy. Click on the news sources above to view articles and
        publications.
      </h2>
    </>
  );
}
export default Title;
