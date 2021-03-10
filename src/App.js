import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} />
        <Preview input={this.state.input} />
      </div>
    );
  }
}
