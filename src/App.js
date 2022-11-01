import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";
import AnimLab from "./components/AnimLab";
import Inventory from "./inventory/Inventory";
import Map from "./map/Map";

export default class App extends React.Component {
  state = {
    pages: [<RecipeSearch />, <AnimLab />, <Inventory />, <Map />],
    curPage: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <div>
          {/* recipe lab */}
          <button
            onClick={() => {
              this.swapProject(0);
            }}
          >
            Recipe Search
          </button>

          {/* animation lab */}
          <button
            onClick={() => {
              this.swapProject(1);
            }}
          >
            Animation Lab
          </button>

          {/* bag lab */}
          <button
            onClick={() => {
              this.swapProject(2);
            }}
          >
            Inventory Bag Lag Lab
          </button>

          {/* map lab */}
          <button
            onClick={() => {
              this.swapProject(3);
            }}
          >
            Map Data
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}
