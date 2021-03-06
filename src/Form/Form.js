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
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      passwordMatch: false,
      passwordWrong: false,
      checked: 0
    };
  }

  checkPassword(value) {
    this.setState({ password: value });
  }

  confirmPassword(value) {
    this.setState({ confirmPassword: value }, this.printConfirmation);
  }

  printConfirmation() {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordWrong: true });
    } else {
      this.setState({ passwordMatch: true });
      this.setState({ passwordWrong: false });
      setTimeout(() => {
        this.setState({ passwordMatch: false });
      }, 5000);
    }
  }

  checkboxLimiter(event) {
    let num = this.state.checked;
    if (event.target.checked === true) {
      num++;
      this.setState({
        checked: num
      });
    } else {
      num--;
      this.setState({
        checked: num
      });
    }
    console.log(event.target.checked);
  }

  lockCheckbox() {
    const checkboxArray = document.querySelectorAll(".checkbox");
    checkboxArray.forEach(item => {
      item.checked = false;
      this.setState({
        checked: 0
      });
    });
  }

  render() {
    if (this.state.checked > 3) {
      this.lockCheckbox();
    }
    return (
      <Container>
        <Wrapper>
          <UserForm
            id="CreateAccount"
            onSubmit={event => {
              this.props.submitHandlerSignUp(event);
            }}
          >
            <Inputstyle>
              <Title className="form-title">Create Your Profile</Title>
              <label htmlFor="username">Username</label>
              <InputField
                required
                type="text"
                name="username"
                placeholder="Create a Username"
                onChange={this.props.checkUserName}
              />
              <UsernameWarning
                className={this.props.warningUsername ? "" : "hidden"}
              >
                *Username already exists*
              </UsernameWarning>

              <label htmlFor="password">Password</label>
              <InputField
                required
                type="password"
                name="password"
                placeholder="Create a Password"
                onChange={event => {
                  this.checkPassword(event.target.value);
                }}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <InputField
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={event => {
                  this.confirmPassword(event.target.value);
                }}
              />
              <PasswordAcceptance
                className={this.state.passwordMatch ? "" : "hidden"}
              >
                *Passwords Match*
              </PasswordAcceptance>
              <UsernameWarning
                className={this.state.passwordWrong ? "" : "hidden"}
              >
                *Passwords Do Not Match*
              </UsernameWarning>

              <label htmlFor="name">Name</label>
              <InputField
                required
                type="text"
                name="name"
                placeholder="Enter First and Last Name"
              />

              <label htmlFor="email">Email Address</label>
              <InputField
                required
                type="text"
                name="email"
                placeholder="Enter an Email address"
              />
            </Inputstyle>

            <Title>Choose up to 3 Interests</Title>
            <ArticleCatagories>
              <label htmlFor="world">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="world"
                  value="world"
                  id="world"
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
                <img src={World} alt="world" />
                <h3>WORLD</h3>
              </label>

              <label htmlFor="Technology">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Technology"
                  value="technology"
                  id="Technology"
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
                <img src={Tech} alt="some img" />
                <h3>TECH</h3>
              </label>

              <label htmlFor="Health">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Health"
                  value="health"
                  id="Health"
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
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
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
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
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
                <img src={Business} alt="some img" />
                <h3>BUSINESS</h3>
              </label>

              <label htmlFor="Sports">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Sports"
                  value="sports"
                  id="Sports"
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
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
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
                <img src={Science} alt="some img" />
                <h3>SCIENCE</h3>
              </label>

              <label htmlFor="Food">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Food"
                  value="food"
                  id="Food"
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
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
                  onChange={event => {
                    this.checkboxLimiter(event);
                  }}
                />
                <img src={Politics} alt="some img" />
                <h3>POLITICS</h3>
              </label>
            </ArticleCatagories>

            <SubmitButton type="submit" name="submit" value="Submit" />
          </UserForm>
          <Paragraph className={this.props.confirmUser ? " " : "hidden"}>
            {" "}
            Thank you for creating an account. Return to Home to Login.
          </Paragraph>
        </Wrapper>
      </Container>
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
  margin-top: 0.5rem;
  text-decoration: none;
`;

const UserForm = styled.form`
  display: flex;
  flex-flow: column;
  padding: 1rem;
  padding-top: 0rem;
  margin-top: 1rem;
`;

const Inputstyle = styled.div`
  display: flex;
  flex-flow: column;
  input {
    border: 0.15rem solid;
    margin-bottom: 0.5rem;
  }
  label {
    text-align: left;
  }
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
    top: 35%;
    left: 48%;
    transform: translate(-50%, -50%);
    height: 7rem;
    width: 7rem;
    opacity: 0;
  }
  input[type="checkbox"]:checked + img {
    opacity: 0.3;
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

const InputField = styled.input`
  font-size: 1rem;
`;

const Title = styled.h2`
  font-size: 1.3em;
`;

const Wrapper = styled.div`
  overflow: scroll;
  width: 50vw;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Paragraph = styled.h2`
  padding = 1rem 0 2rem 0;
  font-size = 2rem;
`;
