import React from "react";
import Form from "./Form";

function CreateAccount(props) {
  return (
    <main className="createAccountMain">
      <Form confirmUser={props.confirmUser} handleSignUp={props.handleSignUp} submitHandlerSignUp={props.submitHandlerSignUp} checkUserName={props.checkUserName} warningUsername={props.warningUsername} />
    </main>
  );
}

export default CreateAccount;
