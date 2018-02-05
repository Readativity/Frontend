import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import styled from "styled-components";

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

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
            <h2>Login</h2>
            <img src="./assets/close.png" alt="close" onClick={this.props.closeModal}/>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username"> Username</label>
              <input name="username" placeholder="Demouser" />
              <label htmlFor="password"> Password</label>
              <input name="password" placeholder="1234"/>
              <input type="submit" name="submit" defaultValue="Sign In" />
            </form>
          </div>
          <div>

          </div>
        </Modal>
    )
  }
}

export default StudentModal;
