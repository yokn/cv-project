import React, { Component } from "react";
import "./styles/App.css";
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
                // value: "",
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
                // value: "",
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
                // value: "",
                type: "number",
                id: "inputPhoneNumber",
              },
            },
          ]}
        />
        <GenericForm
          id="education"
          formElements={[
            {
              label: {
                for: "inputSchoolName",
                text: "School Name",
              },
              input: {
                // value: "",
                type: "text",
                id: "inputSchoolName",
              },
            },
            {
              label: {
                for: "inputStudyTitle",
                text: "Study Title",
              },
              input: {
                // value: "",
                type: "text",
                id: "inputStudyTitle",
              },
            },
            {
              label: {
                for: "inputDate",
                text: "Date",
              },
              input: {
                // value: "",
                type: "date",
                id: "inputDate",
              },
            },
          ]}
        />
        <GenericForm
          id="experience"
          formElements={[
            {
              label: {
                for: "inputCompanyName",
                text: "Company Name",
              },
              input: {
                // value: "",
                type: "text",
                id: "inputCompanyName",
              },
            },
            {
              label: {
                for: "inputPositionTitle",
                text: "Position Title",
              },
              input: {
                // value: "",
                type: "text",
                id: "inputPositionTitle",
              },
            },
            {
              label: {
                for: "inputResponsibilities",
                text: "Responsibilities",
              },
              input: {
                // value: "",
                type: "text",
                id: "inputResponsibilities",
              },
            },
            {
              label: {
                for: "inputDateFrom",
                text: "From",
              },
              input: {
                // value: "",
                type: "date",
                id: "inputDateFrom",
              },
            },
            {
              label: {
                for: "inputDateTo",
                text: "To",
              },
              input: {
                // value: "",
                type: "date",
                id: "inputDateTo",
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
