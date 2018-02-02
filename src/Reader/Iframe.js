import React from "react";
import styled from "styled-components";

function Iframe() {
  var articleArray = [
    "http://time.com/5130772/nunes-memo-released-what-it-says/?xid=homepage",
    "http://www.espn.com/nfl/story/_/id/22190604/super-bowl-lii-predictions-espn-staff-picks-new-england-patriots-philadelphia-eagles",
    "https://www.reuters.com/article/us-usa-markets-risk-analysis/interest-rate-angst-trips-up-u-s-equity-bull-market-idUSKBN1FM2PU",
    "http://www.bbc.com/news/world-us-canada-42922995",
    "https://apnews.com/b348620fc4e34af39ac89388ee4d7450/US-stocks-swoon,-sending-Dow-down-more-than-650-points",
    "http://time.com/5130860/democratic-candidates-fundraising-2018/?xid=homepage",
    "https://apnews.com/067a2c6e8c6a446088c31af1331eec91/LA-school-shooting:-Unclear-where-12-year-old-got-gun",
    "http://www.espn.com/nba/story/_/id/22284640/these-three-ways-warriors-land-lebron-james-nba",
    "https://www.reuters.com/article/us-usa-immigration/u-s-immigration-deal-by-deadline-could-very-well-not-happen-trump-idUSKBN1FM2MY",
    "http://www.bbc.com/news/world-us-canada-42922431"
  ];
  var randomNum = Math.floor(Math.random() * articleArray.length);

  console.log(randomNum);

  var article = articleArray[randomNum];

  console.log(article);

  return <IframeElem src={article} />;
}

export default Iframe;

const IframeElem = styled.iframe`
  height: 100vh;
  width: 100vw;
`;
