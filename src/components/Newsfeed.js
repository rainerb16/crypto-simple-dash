import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Newsfeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news-live.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const articlesList = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>Crypto News</h2>
      {articlesList?.map((article, i) => (
        <div key={i} className="article-wrapper">
          <a href={article.url}>
            <h4>{article.title}</h4>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;
