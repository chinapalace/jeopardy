import React from "react";

export const AnswerInput = props => (
  <input
    type="text"
    value={props.playerAnswer}
    onChange={props.handleInputChange}
  />
);
