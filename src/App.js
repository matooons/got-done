import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        BIG FAT FUCKING ANIME TIDDY
        <div class="accomplishments">
          <textarea
            name="message"
            id="message"
            placeholder="accomplishments"
          ></textarea>
        </div>
        <div class="inconveniences">
          <textarea
            name="message"
            id="message"
            placeholder="inconveniences"
          ></textarea>
        </div>
      </div>
    );
  }
}
