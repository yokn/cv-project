import React, { Component } from "react";

class GenericForm extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (e) => {
    this.setState({});
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({});
  };
  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.onSubmitTask}>
          {this.props.formElements.map((formElement) => {
            return (
              <div>
                <label htmlFor={formElement.label.for}>
                  {formElement.label.text}
                </label>
                <input
                  onChange={this.handleChange}
                  value={formElement.input.value}
                  type={formElement.input.type}
                  id={formElement.input.id}
                ></input>
              </div>
            );
          })}
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
export default GenericForm;
