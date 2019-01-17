import React, { Component } from "react";
const add = (x, y) => x + y;
class GameItem extends Component {
  state = {
    active: true
  };

  setInactive = () => {
    console.log("setInactive clicked");
    this.setState({ active: false });
  };

  render() {
    const index = add(this.props.index, this.props.row);
    return (
      <div
        className={this.state.active ? "game-item" : "game-item inactive"}
        onClick={() => {
          if (this.state.active) {
            this.props.handleClick(index, this.props.value);
            this.setInactive();
          }
        }}
      >
        <div className="front">{this.props.value}</div>
      </div>
    );
  }
}
export default GameItem;
