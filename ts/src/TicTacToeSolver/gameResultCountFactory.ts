import { GameResultCount } from "./typing";

export default function gameResultCountFactory(): GameResultCount {
  return {
    lose: 0,
    draw: 0,
    win: 0,
  };
}
