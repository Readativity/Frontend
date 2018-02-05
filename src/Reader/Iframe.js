import React from "react";
import styled from "styled-components";

function Iframe(props) {
  const baseUrl = "https://newsapi.org/v2/everything?language=en";
  const domains = [
    "techcrunch.com",
    "time.com",
    "apnews.com",
    "espn.com",
    "reuters.com",
    "bbc.com"
  ];
  var domainsQuery = "&domains=";
  for (let i = 0; i < domains.length; i++) {
    domainsQuery += domains[i];
    if (i !== domains.length - 1) {
      domainsQuery += ",";
    }
  }
  const interests = [
    props.userinfo.firstInterest,
    props.userinfo.profiles[0].secondInterest,
    props.userinfo.profiles[0].thirdInterest
  ];
  const randomNum = Math.floor(Math.random() * interests.length);
  const interestsQuery = "&q=" + interests[randomNum];
  const apiKey = "&apiKey=04ea00ecc2ae4e56bb5d0164256ea069";
  const url = baseUrl + domainsQuery + interestsQuery + apiKey;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const randomArticle = Math.floor(
        Math.random() * response.articles.length
      );
      this.setState({
        article: response.articles[randomArticle].url
      });
      console.log(this.state.article);
    })
    .catch(err => console.log(err));

  return <IframeElem src={props.article} />;
}

export default Iframe;

const IframeElem = styled.iframe`
  height: 100vh;
  width: 100vw;
`;

//TechCrunch = yes
//Time = Yes
//AP = Yes
//ESPN = Yes
//Reuters = Yes
//BBC News = Yes
//Youtube = Yes
