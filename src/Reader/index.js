import React from "react";
import styled from "styled-components";
import Iframe from "./Iframe";
import NextButton from "./NextButton";
import Timer from "easytimer.js";

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      articleInfo: ""
    };
    this.nextArticle = this.nextArticle.bind(this);
  }

  componentDidMount() {
    const baseUrl = "https://newsapi.org/v2/everything?language=en";
    const domains = [
      "techcrunch.com",
      "time.com",
      "apnews.com",
      "espn.com",
      "bbc.com",
      "nbcnews.com",
      "abcnews.com",
      "usatoday.com",
      "msnbc.com",
      "wired.com",
      "politico.com",
      "si.com",
      "delish.com",
      "refinery29.com",
      "foodandwine.com",
      "elle.com",
      "today.com"
    ];
    var domainsQuery = "&domains=";
    domains.forEach((domain, index) => {
      domainsQuery += domain;
      if (index !== domains.length - 1) {
        domainsQuery += ",";
      }
    });
    const interests = [
      this.props.userInfo.firstInterest,
      this.props.userInfo.secondInterest,
      this.props.userInfo.thirdInterest
    ];
    const randomInterest =
      interests[Math.floor(Math.random() * interests.length)];
    const interestsQuery = "&q=" + randomInterest;
    const apiKey = "&apiKey=04ea00ecc2ae4e56bb5d0164256ea069";
    const url = baseUrl + domainsQuery + interestsQuery + apiKey;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          articleInfo:
            response.articles[
              Math.floor(Math.random() * response.articles.length)
            ]
        });
        this.setState({
          url: this.state.articleInfo.url
        });
      })
      .then(() => {
        const date = new Date();
        const monthNum = date.getMonth();
        const dayNum = date.getDay();
        var dateNum = date.getDate();
        if (dateNum < 10) {
          dateNum = `0${dateNum}`;
        }
        const yearNum = date.getFullYear();
        let monthWord;
        let dayWord;
        switch (monthNum) {
          case 0:
            monthWord = "Jan";
            break;
          case 1:
            monthWord = "Feb";
            break;
          case 2:
            monthWord = "Mar";
            break;
          case 3:
            monthWord = "Apr";
            break;
          case 4:
            monthWord = "May";
            break;
          case 5:
            monthWord = "Jun";
            break;
          case 6:
            monthWord = "Jul";
            break;
          case 7:
            monthWord = "Aug";
            break;
          case 8:
            monthWord = "Sep";
            break;
          case 9:
            monthWord = "Oct";
            break;
          case 10:
            monthWord = "Nov";
            break;
          case 11:
            monthWord = "Dec";
            break;
          default:
            break;
        }

        switch (dayNum) {
          case 0:
            dayWord = "Sun";
            break;
          case 1:
            dayWord = "Mon";
            break;
          case 2:
            dayWord = "Tues";
            break;
          case 3:
            dayWord = "Wed";
            break;
          case 4:
            dayWord = "Thu";
            break;
          case 5:
            dayWord = "Fri";
            break;
          case 6:
            dayWord = "Sat";
            break;
          default:
            break;
        }
        const today = dayWord + " " + monthWord + " " + dateNum + " " + yearNum;
        fetch("https://readativity.herokuapp.com/activity", {
          method: "post",
          body: JSON.stringify({
            interest: randomInterest,
            articleURL: this.state.articleInfo.url,
            headline: this.state.articleInfo.title,
            image: this.state.articleInfo.urlToImage,
            timeReading: 0,
            date: today,
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
      .catch(console.error);
  }

  nextArticle() {
    this.componentDidMount();
  }

  render() {
    return (
      <div id="reader">
        <Iframe url={this.state.url} />
        <NextButton nextArticle={this.nextArticle} />
      </div>
    );
  }
}

export default Reader;
