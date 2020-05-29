import React from "react";
import Button from "@material-ui/core/Button";

export default function Square(props) {
  return (
    <Button
      style={{
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        textShadow: "2px 2px 2px purple",
        height: 70,
      }}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}
