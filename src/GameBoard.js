import React, { Component } from "react";
import { GameRow } from "./GameRow";

class GameBoard extends Component {
  render() {
    return (
      <div className="game-board">
        <div className="question-rows">
          <GameRow
            row={0}
            title={this.props.titles[0]}
            handleClick={this.props.handleClick}
            active={this.props.row1Answered === 5 ? true : false}
          />
          <GameRow
            row={5}
            title={this.props.titles[1]}
            handleClick={this.props.handleClick}
            active={this.props.row2Answered === 5 ? true : false}
          />
          <GameRow
            row={10}
            title={this.props.titles[2]}
            handleClick={this.props.handleClick}
            active={this.props.row3Answered === 5 ? true : false}
          />
          <GameRow
            row={15}
            title={this.props.titles[3]}
            handleClick={this.props.handleClick}
            active={this.props.row3Answered === 5 ? true : false}
          />
        </div>
      </div>
    );
  }
}

export default GameBoard;
