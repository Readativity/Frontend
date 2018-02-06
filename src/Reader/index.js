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
        const date = new Date();
        const monthNum = date.getMonth();
        const dayNum = date.getDay();
        const dateNum = date.getDate();
        const yearNum = date.getFullYear();
        let monthWord;
        let dayWord;
        switch (monthNum) {
          case 0:
            monthWord = "January";
            break;
          case 1:
            monthWord = "February";
            break;
          case 2:
            monthWord = "March";
            break;
          case 3:
            monthWord = "April";
            break;
          case 4:
            monthWord = "May";
            break;
          case 5:
            monthWord = "June";
            break;
          case 6:
            monthWord = "July";
            break;
          case 7:
            monthWord = "August";
            break;
          case 8:
            monthWord = "September";
            break;
          case 9:
            monthWord = "October";
            break;
          case 10:
            monthWord = "November";
            break;
          case 11:
            monthWord = "December";
            break;
          default:
            break;
        }

        switch (dayNum) {
          case 0:
            dayWord = "Sunday";
            break;
          case 1:
            dayWord = "Monday";
            break;
          case 2:
            dayWord = "Tuesday";
            break;
          case 3:
            dayWord = "Wednesday";
            break;
          case 4:
            dayWord = "Thursday";
            break;
          case 5:
            dayWord = "Friday";
            break;
          case 6:
            dayWord = "Saturday";
            break;
          default:
            break;
        }
        const today = dateNum + " " + dayWord + " " + monthWord + " " + yearNum;
        fetch("https://readativity.herokuapp.com/activity", {
          method: "post",
          body: JSON.stringify({
            interest: randomInterest,
            articleURL: articleInfo.url,
            headline: articleInfo.title,
            image: articleInfo.urlToImage,
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
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Iframe url={this.state.url} />
        <NextButton />
      </div>
    );
  }
}

export default Reader;
