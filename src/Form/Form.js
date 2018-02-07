import React from "react";
import styled from "styled-components";
import World from "./icons/world-icon.png";
import Tech from "./icons/tech-icon.png";
import Health from "./icons/health-icon.png";
import Politics from "./icons/politics-icon.png";
import Science from "./icons/science-icon.png";
import Sports from "./icons/sports-icon.png";
import Business from "./icons/business-icon.png";
import Food from "./icons/food-icon.png";
import PopCulture from "./icons/pop-culture-icon.png";

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      password: "",
      confirmPassword: "",
      passwordMatch: false,
      passwordWrong: false
    }
  }

  checkPassword(value) {
    this.setState({password: value});
  }

  confirmPassword(value) {
    this.setState({confirmPassword: value}, this.printConfirmation);
  }

  printConfirmation() {
    if(this.state.password !== this.state.confirmPassword){
      this.setState({passwordWrong: true});
      setTimeout(() => {
        this.setState({ passwordWrong: false });
      }, 3000);
    } else {this.setState({passwordMatch: true});
    setTimeout(() => {
      this.setState({ passwordMatch: false });
    }, 5000);}
  }


  render() {
    return(
      <div>
        <UserForm
          id="CreateAccount"
          onSubmit={event => {
            this.props.submitHandlerSignUp(event);
          }}
        >
          <h2 className="form-title">Create Reader profile</h2>
          <label htmlFor="username">Username</label>
          <input required type="text" name="username" placeholder="Create a Username" onChange={this.props.checkUserName} />
          <UsernameWarning className={this.props.warningUsername ? "" : "hidden"} >*Username already exists*</UsernameWarning>

          <label htmlFor="password">Password</label>
          <input required type="password" name="password" placeholder="Create a Password"  onChange={(event)=>{this.checkPassword(event.target.value)}}/>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input required type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(event)=>{this.confirmPassword(event.target.value)}} />
          <PasswordAcceptance className={this.state.passwordMatch ? "" : "hidden"} >*Passwords Match*</PasswordAcceptance>
          <UsernameWarning className={this.state.passwordWrong ? "" : "hidden"} >*Passwords Do Not Match*</UsernameWarning>

          <label htmlFor="name">Name</label>
          <input required type="text" name="name" placeholder="Enter First and Last Name" />

          <label htmlFor="email">Email Address</label>
          <input required type="text" name="email" placeholder="Enter an Email address" />

          <h2>Choose 3 Interests</h2>
          <ArticleCatagories>
            <label htmlFor="world">
              <input className="checkbox" type="checkbox" name="world" value="world" id="world" />
              <img src={World} alt="some img" />
              <h3>WORLD</h3>
            </label>

            <label htmlFor="Technology">
              <input
                className="checkbox"
                type="checkbox"
                name="Technology"
                value="technology"
                id="Technology"
              />
              <img src={Tech} alt="some img" />
              <h3>TECH</h3>
            </label>

            <label htmlFor="Health">
              <input className="checkbox" type="checkbox" name="Health" value="health" id="Health" />
              <img src={Health} alt="some img" />
              <h3>HEALTH</h3>
            </label>

            <label htmlFor="Pop-culture">
              <input
                className="checkbox"
                type="checkbox"
                name="Pop-culture"
                value="pop-culture"
                id="Pop-culture"
              />
              <img src={PopCulture} alt="some img" />
              <h3>POP CULTURE</h3>
            </label>

            <label htmlFor="Business">
              <input
                className="checkbox"
                type="checkbox"
                name="Business"
                value="business"
                id="Business"
              />
              <img src={Business} alt="some img" />
              <h3>BUSINESS</h3>
            </label>

            <label htmlFor="Sports">
              <input className="checkbox" type="checkbox" name="Sports" value="sports" id="Sports" />
              <img src={Sports} alt="some img" />
              <h3>SPORTS</h3>
            </label>

            <label htmlFor="Science">
              <input
                className="checkbox"
                type="checkbox"
                name="Science"
                value="science"
                id="Science"
              />
              <img src={Science} alt="some img" />
              <h3>SCIENCE</h3>
            </label>

            <label htmlFor="Food">
              <input className="checkbox" type="checkbox" name="Food" value="food" id="Food" />
              <img src={Food} alt="some img" />
              <h3>FOOD</h3>
            </label>

            <label htmlFor="Politics">
              <input
                className="checkbox"
                type="checkbox"
                name="Politics"
                value="politics"
                id="Politics"
              />
              <img src={Politics} alt="some img" />
              <h3>POLITICS</h3>
            </label>
          </ArticleCatagories>

          <SubmitButton type="submit" name="submit" value="Submit" />
        </UserForm>
      </div>
    );
  }
}

export default Form;

const UsernameWarning = styled.span`
  color: red;
  font-size: 10px;
`;

const PasswordAcceptance = styled.span`
  color: green;
  font-size: 10px;
`;

const SubmitButton = styled.input`
  background: #fdd130;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #3c3c3c;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

const UserForm = styled.form`
  display: flex;
  flex-flow: column;
  padding: 1rem;
  padding-top: 0rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ArticleCatagories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  img {
    width: 100%;
    border-radius: 15%;
  }

  input[type="checkbox"] {
    position: absolute;
  }

  /* Default State */
  div {
    background: green;
    width: 400px;
    height: 100px;
    line-height: 100px;
    color: white;
    text-align: center;
  }

  /* Toggled State */
  input[type="checkbox"]:checked ~ div {
    background: red;
  }
  label {
    position: relative;
    text-align: center;
    h3 {
      position: absolute;
      border-radius: 10%;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(201, 201, 201, 0.7);
      padding: 0.5rem;
    }
  }
`;
