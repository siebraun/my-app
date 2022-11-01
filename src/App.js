import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";
import AnimLab from "./components/AnimLab";
import Inventory from "./Inventory/";

export default class App extends React.Component {
  state = {
    pages: [<RecipeSearch />, <AnimLab />, <Inventory />],
    curPage: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <div>
          <button
            onClick={() => {
              this.swapProject(0);
            }}
          >
            Recipe Search
          </button>
          <button
            onClick={() => {
              this.swapProject(1);
            }}
          >
            Animation Lab
          </button>
          {/* <button
            onClick={() => {
              this.swapProject(2);
            }}
          >
            Inventory Bag Lag Lab
          </button> */}
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}
