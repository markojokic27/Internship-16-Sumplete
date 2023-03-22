import React, { useState, useEffect } from "react";
import { initialCell } from "../constants/Cell";
function generateGrid(gridSize, numberSize) {
  let gridCells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    gridCells = [...gridCells, { initialCell }];
  }
  for (let i = 0; i < gridSize - 1; i++) {
    for (let j = 0; j < gridSize - 1; j++) {
      let r = Math.floor(Math.random() * 9) + 1;
      let index = i * gridSize + j;
      gridCells[index].value = r;
      gridCells[index].isNumber = true;
      gridCells[index].isCircle = Math.random() < 0.5;
      gridCells[index].isSolution = gridCells[index].isCircle;
    }
  }
  for (let i = 0; i < gridSize - 1; i++) {
    let sum = 0;
    for (let j = 0; j < gridSize - 1; j++) {
      let index = i * gridSize + j;
      if (gridCells[index].isCircle) {
        sum += gridCells[index].value;
      }
    }
    let index = i * gridSize + gridSize - 1;
    gridCells[index].value = sum;
    gridCells[index].isSolution = true;
    gridCells[index].isAnswer = true;

  }
  for (let j = 0; j < gridSize - 1; j++) {
    let sum = 0;
    for (let i = 0; i < gridSize - 1; i++) {
      let index = i * gridSize + j;
      if (gridCells[index].isCircle) {
        sum += gridCells[index].value;
      }
    }
    let index = gridSize * gridSize - gridSize + j; ///OVO POPRAVIIIIII
    gridCells[index].value = sum;
    gridCells[index].isSolution = true;
    gridCells[index].isAnswer = true;
  }
  return gridCells;
}

function MyComponent(props) {
  const [gridCells, setGridCells] = useState([]);

  useEffect(() => {
    setGridCells(generateGrid(props.gridSize, props.numberSize));
  }, [props.gridSize, props.numberSize]);

  return (
    <div className="grid">
      {gridCells.map((cell, index) => (
        <div
          key={index}
          className={`cell ${cell.isCircle ? "circle" : ""} ${
            cell.isSolution ? "solution" : ""}
            ${cell.isAnswer ? "vanswer" : ""}
            ${cell.isNumber ? "number" : ""}
          }`}
        >
          {cell.value}
        </div>
      ))}
    </div>
  );
}
export default MyComponent;
