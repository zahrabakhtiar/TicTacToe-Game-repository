import React, { Component } from "react";
import Square from "./Square";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "linear-gradient(40deg, #ac35a2 55%, #cc95c5 90%)",
  border: "1px solid purple",
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  margin: 5,
  float: "left",
  textAlign: "center",
  height: 70,
  width: 70,
  lineHeight: 70,
  "&:hover": {
    border: "1px solid lightgray",
    background: "#ac35a2",
  },
});

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MyButton>{this.renderSquare(0)}</MyButton>
          <MyButton>{this.renderSquare(1)}</MyButton>
          <MyButton>{this.renderSquare(2)}</MyButton>
          <br></br>
          <MyButton>{this.renderSquare(3)}</MyButton>
          <MyButton>{this.renderSquare(4)}</MyButton>
          <MyButton>{this.renderSquare(5)}</MyButton>
          <br></br>
          <MyButton>{this.renderSquare(6)}</MyButton>
          <MyButton>{this.renderSquare(7)}</MyButton>
          <MyButton>{this.renderSquare(8)}</MyButton>
        </Grid>
      </Grid>
    );
  }
}

export default Board;
