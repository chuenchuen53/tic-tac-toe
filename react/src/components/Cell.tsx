import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { TicTacToeElement } from "../typing/TicTacToe";

interface Props {
  element: TicTacToeElement | null;
}

export const Cell = (props: Props) => {
  const { element } = props;
  switch (element) {
    case TicTacToeElement.X:
      return <CloseIcon color="error" fontSize="inherit" />;
    case TicTacToeElement.O:
      return <CircleOutlinedIcon color="success" fontSize="inherit" />;
    default:
      return null;
  }
};
