import { useEffect, useState } from "react";
import checkComplete from "../utilis/checkSums";
import generateGrid from "../utilis/generete";
import restartGame from "../utilis/restart";
import winChecker from "../utilis/winChecker";
function Game(props) {
  const [gridCells, setGridCells] = useState([]);
  const [hidden, setHidden] = useState("hidden");
  useEffect(() => {
    setGridCells(generateGrid(props.gridSize));
  }, [props.gridSize, props.numberSize]);

  const handleNumberClick = (event) => {
    if (event.currentTarget.classList.contains("delete")) {
      event.currentTarget.isDeleted = false;
      event.currentTarget.classList.remove("delete");
    } else {
      event.currentTarget.isDeleted = true;
      event.currentTarget.classList.add("delete");
    }
    setGridCells((prevGridCells) =>
      checkComplete({ gridCells: prevGridCells })
    );
    if(winChecker({gridCells})){
      setHidden("");
    }
    
    console.log(gridCells);
  };
  const newGame = () => {
    setHidden("hidden");
    setGridCells(generateGrid(props.gridSize));
  };
  const restart = () => {
    setGridCells(restartGame({ gridCells }));
  };

  return (
    <div className="grid">
      {gridCells.map((cell, index) => (
        <div
          key={index}
          className={`cell 
            ${cell.isSolution ? "solution" : ""}
            ${cell.isAnswer ? "vanswer" : ""}
            ${cell.isNumber ? "number" : ""}
            ${cell.isDeleted ? "delete" : ""}
            ${cell.isCorrectAnswer ? "correct" : ""}`}
          onClick={cell.isNumber ? handleNumberClick : null}
        >
          {cell.value}
        </div>
      ))}
      <button onClick={restart}>Restart</button>
      <div className={hidden}>
        Puzzle solved! Well done
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}
export default Game;
