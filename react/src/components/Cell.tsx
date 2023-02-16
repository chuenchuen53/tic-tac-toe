import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { TicTacToeElement } from "../typing/TicTacToe";

interface Props {
  element: TicTacToeElement | null;
}

export const Chess = (props: Props) => {
  const { element } = props;
  switch (element) {
    case TicTacToeElement.X:
      return <CloseIcon color="error" />;
    case TicTacToeElement.O:
      return <CircleOutlinedIcon color="success" />;
    default:
      return null;
  }
};
