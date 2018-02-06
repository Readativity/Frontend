import React from "react";
import Form from "./Form";

function CreateAccount(props) {
  return (
    <main className="main">
      <Form handleSignUp={props.handleSignUp} submitHandlerSignUp={props.submitHandlerSignUp} />
    </main>
  );
}

export default CreateAccount;
