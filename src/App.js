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
          className="testClassName"
          formElements={[
            {
              label: {
                for: "testlabelfor",
                text: "testlabeltext",
              },
              input: {
                value: "testinputvalue",
                type: "testinputtype",
                id: "testinputid",
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
