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
    playerAnswer: "",
    questions: [],
    titles: [],
    modal: false,
    message: "",
    correct: false,
    wrong: false
  };
  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const categories = randomNum(1, 1300);
    const questions = [];
    const titles = [];

    try {
      let [row0, row1, row2] = await Promise.all([
        fetch(`http://jservice.io//api/category?id=${categories[0]}`),
        fetch(`http://jservice.io//api/category?id=${categories[1]}`),
        fetch(`http://jservice.io//api/category?id=${categories[2]}`)
      ]);
      row0 = await row0.json();
      row1 = await row1.json();
      row2 = await row2.json();
      questions.push(
        ...row0.clues.slice(0, 5),
        ...row1.clues.slice(0, 5),
        ...row2.clues.slice(0, 5)
      );
      questions.forEach(function(item, index) {
        item.key = index;
      });
      titles.push(row0.title, row1.title, row2.title);

      this.setState({ questions, titles });
      console.log("state", this.state);
    } catch (err) {
      this.setState({ errorMessage: err });
    }
  };
  handleClick = e => {
    const newQuestion = this.state.questions[e].question;
    const newAnswer = this.state.questions[e].answer;
    this.setState({ activeQuestion: newQuestion, activeAnswer: newAnswer });
    console.log(this.state.activeQuestion);
    this.launchModal();
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
      setTimeout(() => this.setState({ correct: false, modal: false }), 3000);
    } else {
      this.showFalse();
      setTimeout(() => this.setState({ wrong: false }), 3000);
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
        <GameBoard
          handleClick={this.handleClick}
          titles={this.state.titles}
          question={this.state.questions}
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
        />
      </div>
    );
  }
}

export default App;
