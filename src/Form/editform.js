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
      userInfo: { ...props.userInfo },
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
            onSubmit={(event, id) => {
              this.props.handleEditUser(event, this.state.userInfo.id);
            }}
          >
            <Inputstyle>
              <Title className="form-title">Edit Reader Profile</Title>
              <label htmlFor="username">Username</label>
              <InputField
                required
                defaultValue={this.state.userInfo.username}
                type="text"
                name="username"
                onChange={this.props.checkUserName}
              />
              <UsernameWarning className={this.props.warningUsername ? "" : "hidden"}>
                *Username already exists*
              </UsernameWarning>

              <label htmlFor="password">Password</label>
              <InputField
                required
                defaultValue={this.state.userInfo.password}
                type="password"
                name="password"
                onChange={event => {
                  this.checkPassword(event.target.value);
                }}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <InputField
                required
                defaultValue={this.state.userInfo.password}
                type="password"
                name="confirmPassword"
                onChange={event => {
                  this.confirmPassword(event.target.value);
                }}
              />
              <PasswordAcceptance className={this.state.passwordMatch ? "" : "hidden"}>
                *Passwords Match*
              </PasswordAcceptance>
              <UsernameWarning className={this.state.passwordWrong ? "" : "hidden"}>
                *Passwords Do Not Match*
              </UsernameWarning>

              <label htmlFor="name">Name</label>
              <InputField
                required
                type="text"
                name="name"
                defaultValue={this.state.userInfo.name}
              />

              <label htmlFor="email">Email Address</label>
              <InputField
                required
                type="text"
                name="email"
                defaultValue={this.state.userInfo.email}
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
          <p className={this.props.confirmEdit ? " " : "hidden"}>
            {" "}
            Thank you for editing your account. Return to Dashboard to continue reading.
          </p>
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
