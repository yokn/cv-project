import React, { Component } from "react";
import GenericForm from "./components/GenericForm";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <GenericForm
          id="general"
          formElements={[
            {
              label: {
                for: "inputName",
                text: "Name",
              },
              input: {
                value: "",
                type: "text",
                id: "inputName",
              },
            },
            {
              label: {
                for: "inputEmail",
                text: "Email",
              },
              input: {
                value: "",
                type: "email",
                id: "inputEmail",
              },
            },
            {
              label: {
                for: "inputPhoneNumber",
                text: "Phone Number",
              },
              input: {
                value: "",
                type: "number",
                id: "inputPhoneNumber",
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
