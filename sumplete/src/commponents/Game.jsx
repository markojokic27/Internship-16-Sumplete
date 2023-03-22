import { useEffect, useState } from "react";
import checkComplete from "../utilis/checkComplete";
import generateGrid from "../utilis/generete";

function Game(props) {
  const [gridCells, setGridCells] = useState([]);

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
  console.log("a");
  setGridCells((prevGridCells) => checkComplete({ gridCells: prevGridCells }));
  console.log(gridCells);
};

  return (
    <div className="grid">
      {gridCells.map((cell, index) => (
        <div
          key={index}
          className={`cell 
            ${cell.isCircle ? "circle" : ""} 
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
    </div>
  );
}
export default Game;
