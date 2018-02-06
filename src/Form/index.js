import React from "react";
import Form from "./Form";

function CreateAccount(props) {
  return (
    <main className="createAccountMain">
      <Form handleSignUp={props.handleSignUp} submitHandlerSignUp={props.submitHandlerSignUp} />
    </main>
  );
}

export default CreateAccount;
