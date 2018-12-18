import React from "react";
import GameItem from "./GameItem";
const values = [100, 200, 300, 400, 500];
export const GameRow = props => (
  <div className="game-row">
    <div className="title">{props.title}</div>
    {values.map((value, index) => (
      <GameItem
        value={value}
        index={index}
        row={props.row}
        handleClick={props.handleClick}
      />
    ))}
  </div>
);
