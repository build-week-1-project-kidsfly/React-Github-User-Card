import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followersData: []
    };
  }

  componentDidMount() {
    function getUserData() {
      return axios.get("https://api.github.com/users/jalba784");
    }

    function getUserFollowers() {
      return axios.get("https://api.github.com/users/jalba784/followers");
    }

    axios
      .all([getUserData(), getUserFollowers()])
      .then(
        axios.spread((uData, fData) => {
          console.log(uData.data);
          console.log(fData.data);
        })
      )
      .catch(
        axios.spread((uError, fError) => {
          console.log(uError, "User error");
          console.log(fError, "Follower Error");
        })
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
