import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import styled from "styled-components";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    // let userName= this.props.userInfo.name;


    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.closeModal}
        className={{
          base: 'modal'
        }}
        contentLabel="Login"
        >
          <div className={((this.props.loginView === 'form') ? ' ' : 'hidden')}>
            <LoginDiv >
              <Close src="./assets/close.png" alt="close" onClick={this.props.closeModal}/>
              <Header>Login</Header>
              <FormLogin onSubmit={this.props.handleLogin}>
                <Labels htmlFor="username"> Username</Labels>
                <Inputs type="text" name="username" placeholder="demouser" />
                <Labels htmlFor="password"> Password</Labels>
                <Inputs type="password" name="password" placeholder="1234"/>
                <Submit type="submit" name="submit" defaultValue="Sign In" />
              </FormLogin>
              <Warning className={(this.props.warning ? ' ' : 'hidden')}>Username and password do not match records.</Warning>
            </LoginDiv>
          </div>
          <div className={((this.props.loginView === 'link') ? ' ' : 'hidden')}>
            <LoginDiv2>
              <LinkStyled to={'/dashboard'}> Go to my account</LinkStyled>
            </LoginDiv2>
          </div>
        </Modal>
    )
  }
}

const LoginDiv = styled.div `
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 10% 70% 10%;
`;

const LoginDiv2 = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Close = styled.img `
    grid-row: 1/2;
    grid-column: 1/2;
    width: 2rem;
    margin-top: .5rem;
    margin-right: .5rem;
    justify-self: end;
    align-self: start;
`
const Header = styled.h1 `
    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    font-size: 2rem;
`
const FormLogin = styled.form `
    grid-row: 3/4;
    grid-column: 1/2;
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
`
const Submit = styled.input `
    width: 60%;
    margin-top: 2rem;
    height: 2rem;
    background-color: var(--yellow);
    color: black;
    font-size: 1.5rem;
`

const Labels = styled.label `
    width: 60%;
    padding-top: 1rem;
    font-family: var(--roboto);
`
const Inputs = styled.input `
    width: 60%;
    font-size: 1rem;
    height: 1.5rem;
    border: solid black 1px;
`
const Warning= styled.p `
    grid-row: 4/5;
    grid-column: 1/2;
    color: red;
    text-align: center;
`
const LinkStyled = styled(Link) `
    text-decoration: none;
    padding: 1rem;
    margin-top: 7rem;
    border: black solid 1px;
    background-color: var(--yellow);
`;


export default Login;
