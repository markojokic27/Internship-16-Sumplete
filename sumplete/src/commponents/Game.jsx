import { useEffect, useState } from "react";
import generateGrid from "../utilis/generete";


function Game(props) {
  const [gridCells, setGridCells] = useState([]);

  useEffect(() => {
    setGridCells(generateGrid(props.gridSize));
  }, [props.gridSize, props.numberSize]);

  // const handleNumberClick=((id) => {
  //   setGridCells(numberClicked({gridCells,id}));
  // });
  const handleNumberClick = (event) => {
    if (event.currentTarget.classList.contains("delete")) {
      event.currentTarget.classList.remove("delete");
    }
    else{event.currentTarget.classList.add("delete");}
    
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
          }`}
          onClick={ cell.isNumber? handleNumberClick:null}
        >
          {cell.value}
        </div>
      ))}
    </div>
  );
}
export default Game;
