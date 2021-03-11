import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import defaultString from "./DefaultString";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultString,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} input={this.state.input} />
        <Preview input={this.state.input} />
      </div>
    );
  }
}
