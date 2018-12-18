import React, { Component } from "react";
const add = (x, y) => x + y;
class GameItem extends Component {
  render() {
    const index = add(this.props.index, this.props.row);
    return (
      <div className="game-item" onClick={() => this.props.handleClick(index)}>
        <div className="front">{this.props.value}</div>
      </div>
    );
  }
}
export default GameItem;
