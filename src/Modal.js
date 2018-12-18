import React from "react";
import correct from "./correct.png";
import wrong from "./wrong.jpg";

export const Modal = props => {
  return (
    <div className={props.show ? "modal" : "modal display-none"}>
      <div className="modal-content" autoFocus={false}>
        <button onClick={props.handleClose}>close</button>
        <div
          className={props.correct || props.wrong ? "modal-question hide" : ""}
        >
          <div>{props.question}</div>

          <form onSubmit={props.handleSubmit}>
            <input
              autoFocus={true}
              type="text"
              value={props.playerAnswer}
              onChange={props.handleInputChange}
            />
          </form>
        </div>
        <div className={props.correct ? "correct-show" : "correct-hide"}>
          <span>Correct!</span>
          <img src={correct} alt="correct" />
        </div>
        <div className={props.wrong ? "wrong-show" : "wrong-hide"}>
          <span>InCorrect!</span>
          <img src={wrong} alt="wrong" />
        </div>
      </div>
    </div>
  );
};
