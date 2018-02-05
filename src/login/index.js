import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import styled from "styled-components";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

<<<<<<< HEAD
  const LoginForm =styled.div `
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
=======
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;


    this.state.users.forEach(user => {
      if(user.username === username && user.password === password) {
        this.setState({userId:user.id})
      }
    })
  }

>>>>>>> f9f0978db351ec13bb777ee8fdea7e508db4deb3

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
          <div>
<<<<<<< HEAD
            <LoginForm>
              <Close src="./assets/close.png" alt="close" onClick={this.props.closeModal}/>
              <Header>Login</Header>
              <FormLogin onSubmit={this.props.handleLogin}>
                <label htmlFor="username"> Username</label>
                <input name="username" placeholder="Demouser" />
                <label htmlFor="password"> Password</label>
                <input name="password" placeholder="1234"/>
                <input type="submit" name="submit" defaultValue="Sign In" />
              </FormLogin>
            </LoginForm>
=======
            <h2>Login</h2>
            <img src="./assets/close.png" alt="close" onClick={this.props.closeModal}/>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username"> Username</label>
              <input name="username" placeholder="Demouser" />
              <label htmlFor="password"> Password</label>
              <input name="password" placeholder="1234"/>
              <input type="submit" name="submit" defaultValue="Sign In" />
            </form>
>>>>>>> f9f0978db351ec13bb777ee8fdea7e508db4deb3
          </div>
          <div>

          </div>
        </Modal>
    )
  }
}

export default StudentModal;
