import { initialCell } from "../constants/Cell";

function restartGame(props) {
  let { gridCells } = props;
  for (let i = 0; i < 16; i++) {
    let value=gridCells[i].value;
    gridCells[i]=initialCell;
    gridCells[i].value=value;
  }
  return gridCells;
}
export default restartGame;