import React from "react";
import styled from "styled-components";
import Iframe from "./Iframe";
import NextButton from "./NextButton";

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  componentDidMount() {
    console.log("props", this.props.userInfo);
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
          url: response.articles[randomArticle].url
        });
        console.log("this.state.article", this.state.article);
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
