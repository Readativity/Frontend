import React from "react";
import styled from "styled-components";
import Iframe from "./Iframe";
import NextButton from "./NextButton";
import Timer from "easytimer.js";

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  componentDidMount() {
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
      this.props.userInfo.firstInterest,
      this.props.userInfo.secondInterest,
      this.props.userInfo.thirdInterest
    ];
    const randomNum = Math.floor(Math.random() * interests.length);
    const randomInterest = interests[randomNum];
    const interestsQuery = "&q=" + randomInterest;
    const apiKey = "&apiKey=04ea00ecc2ae4e56bb5d0164256ea069";
    const url = baseUrl + domainsQuery + interestsQuery + apiKey;
    var articleInfo;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const randomArticle = Math.floor(
          Math.random() * response.articles.length
        );
        articleInfo = response.articles[randomArticle];
        this.setState({
          url: articleInfo.url
        });
      })
      .then(() => {
        var date = new Date();
        fetch("https://readativity.herokuapp.com/activity", {
          method: "post",
          body: JSON.stringify({
            interest: randomInterest,
            articleURL: articleInfo.url,
            headline: articleInfo.title,
            image: articleInfo.urlToImage,
            timeReading: 0,
            date: date.toDateString(),
            _userId: this.props.userInfo.id
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        })
          .then(response => response.json())
          .then(response => {
            var timer = new Timer();
            timer.start();
            timer.addEventListener("minutesUpdated", event => {
              var time = timer.getTotalTimeValues().minutes;
              fetch(
                `https://readativity.herokuapp.com/activity/
                  ${response.activity.id}`,
                {
                  method: "put",
                  body: JSON.stringify({
                    timeReading: time
                  }),
                  headers: new Headers({
                    "Content-Type": "application/json"
                  })
                }
              ).catch(console.error);
            });
          })
          .catch(console.error);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="reader">
        <Iframe url={this.state.url} />
        <NextButton />
      </div>
    );
  }
}

export default Reader;
