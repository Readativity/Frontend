import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import styled from "styled-components";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
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
                <label htmlFor="username"> Username</label>
                <input name="username" placeholder="Demouser" />
                <label htmlFor="password"> Password</label>
                <input name="password" placeholder="1234"/>
                <input type="submit" name="submit" defaultValue="Sign In" />
              </FormLogin>
            </LoginDiv>
          </div>
          <div className={((this.props.loginView === 'link') ? ' ' : 'hidden')}>
            <h1>Link</h1>
          </div>
        </Modal>
    )
  }
}

const LoginDiv = styled.div `
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 10% 80%
`
const Close = styled.img `
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: end;
    align-self: start;
`
const Header = styled.h1 `
    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    font-size: 1.5rem;
`
const FormLogin = styled.form `
    grid-row: 3/4;
    grid-column: 1/2;
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
`

export default Login;
