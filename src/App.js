import React, { Component } from "react";
import { randomNum } from "./lib/utils.js";
import GameBoard from "./GameBoard";
import { AnswerInput } from "./AnswerInput";
import { Modal } from "./Modal";
import "./App.css";

class App extends Component {
  rows = 3;

  state = {
    activeQuestion: "",
    activeAnswer: "",
    activeValue: 0,
    playerAnswer: "",
    questions: [],
    titles: ["...loading", "...loading", "...loading"],
    modal: false,
    message: "",
    correct: false,
    wrong: false,
    playerScore: 0,
    row1Answered: 0,
    row2Answered: 0,
    row3Answered: 0
  };
  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const categories = randomNum(1, 1300);
    const questions = [];
    const titles = [];

    try {
      let [row0, row1, row2, row3] = await Promise.all([
        fetch(
          `https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=${
            categories[0]
          }`
        ),
        fetch(
          `https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=${
            categories[1]
          }`
        ),
        fetch(
          `https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=${
            categories[2]
          }`
        ),
        fetch(
          `https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=${
            categories[3]
          }`
        )
      ]);
      row0 = await row0.json();
      row1 = await row1.json();
      row2 = await row2.json();
      row3 = await row3.json();
      questions.push(
        ...row0.clues.slice(0, 5),
        ...row1.clues.slice(0, 5),
        ...row2.clues.slice(0, 5),
        ...row3.clues.slice(0, 5)
      );
      questions.forEach(function(item, index) {
        item.key = index;
      });
      titles.push(row0.title, row1.title, row2.title, row3.title);

      this.setState({ questions, titles });
      console.log("state", this.state);
    } catch (err) {
      this.setState({ errorMessage: err });
    }
  };
  handleClick = (e, value) => {
    console.log(e);
    const newQuestion = this.state.questions[e].question;
    const newAnswer = this.state.questions[e].answer;
    this.setState({
      activeQuestion: newQuestion,
      activeAnswer: newAnswer,
      activeValue: value
    });
    console.log(this.state.activeQuestion);
    this.launchModal();
    if (e < 5) {
      this.setState({ row1Answered: this.state.row1Answered + 1 });
    }
    if (e > 4 && e < 10) {
      this.setState({ row2Answered: this.state.row2Answered + 1 });
    }
    if (e > 9) {
      this.setState({ row3Answered: this.state.row3Answered + 1 });
    }
  };
  launchModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({
      modal: false,
      playerAnswer: "",
      wrong: false,
      correct: false
    });
  };
  handleInputChange = e => {
    this.setState({
      playerAnswer: e.target.value
    });
    console.log(this.state.playerAnswer);
  };
  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.playerAnswer.toUpperCase() ===
      this.state.activeAnswer.toUpperCase()
    ) {
      this.showCorrect();
      setTimeout(
        () =>
          this.setState({
            correct: false,
            modal: false,
            playerScore: this.state.playerScore + this.state.activeValue
          }),
        3000
      );
    } else {
      this.showFalse();
      setTimeout(
        () =>
          this.setState({
            wrong: false,
            playerScore: this.state.playerScore - this.state.activeValue
          }),
        3000
      );
    }
    this.setState({ playerAnswer: "" });

    setTimeout(() => this.setState({ correct: false, wrong: false }), 3000);
  };
  showFalse = () => {
    this.setState({ wrong: true });
  };

  showCorrect = () => {
    this.setState({ correct: true });
  };
  render() {
    return (
      <div className="App">
        <div className="score">Score: {this.state.playerScore}</div>
        <GameBoard
          handleClick={this.handleClick}
          titles={this.state.titles}
          question={this.state.questions}
          row1Answered={this.state.row1Answered}
          row2Answered={this.state.row2Answered}
          row3Answered={this.state.row3Answered}
        />
        <Modal
          show={this.state.modal}
          question={this.state.activeQuestion}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          playerAnswer={this.state.playerAnswer}
          correct={this.state.correct}
          wrong={this.state.wrong}
          handleClose={this.closeModal}
          answer={this.state.activeAnswer}
        />
      </div>
    );
  }
}

export default App;
