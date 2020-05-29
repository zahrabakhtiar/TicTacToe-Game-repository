import React, { Component } from "react";
import Board from "./Board";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { styled } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const StatusButton = styled(Button)({
  background: "rgb(107, 78, 134)",
  color: "white",
  fontSize: "10px",
  border: "1px solid rgb(55, 24, 83)",
  height: "20px",
});

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNum: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  jumpTo(step) {
    this.setState({ stepNum: step, xIsNext: step % 2 === 0 });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = findwinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({ squares: squares }),
      xIsNext: !this.state.xIsNext,
      stepNum: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNum];
    const winner = findwinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "GO TO move #" + move : "START THE GAME";
      return (
        <ListItem key={move}>
          <StatusButton
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </StatusButton>
        </ListItem>
      );
    });
    let status;
    if (winner) {
      status = "Winner Is " + winner;
    } else {
      status = "Next Player Is " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <Grid container>
        <CssBaseline />
        <Grid item xs={12}>
          <h1
            style={{
              color: "purple",
              fontSize: "70px",
              fontWeight: "bold",
              textShadow: "2px 5px 5px rgb(161, 97, 167)",
              textAlign: "center",
            }}
          >
            Tic Tac Toe
          </h1>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            position: "fixed",
            top: "35%",
            left: "35%",
            display: "flex",
          }}
        >
          <div>
            <Board
              onClick={(i) => this.handleClick(i)}
              squares={current.squares}
            />
          </div>
          <div
            style={{
              marginLeft: "20px",
              fontSize: "25px",
              color: "rgb(63, 30, 94)",
              fontWeight: "bold",
              textShadow: "2px 5px 5px rgb(161, 97, 167)",
            }}
          >
            <div>{status}</div>
            <List>{moves}</List>
          </div>
        </Grid>
      </Grid>
    );
  }
}

function findwinner(squares) {
  const lineofwin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lineofwin.length; i++) {
    const [a, b, c] = lineofwin[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
