function checkComplete(props) {
  let { gridCells } = props;
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      let index = i * 4 + j;
      if (!gridCells[index].isDeleted) {
        sum += gridCells[index].value;
      }
    }
    let index = i * 4 + 3;
    if (sum === gridCells[index].value) {
      gridCells[index].isCorrectAnswer = true;
    } else {
      gridCells[index].isCorrectAnswer = false;
    }
  }
  for (let j = 0; j < 3; j++) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      let index = i * 4 + j;
      if (!gridCells[index].isDeleted) {
        sum += gridCells[index].value;
      }
    }
    let index = 12 + j;
    if (sum === gridCells[index].value) {
      gridCells[index].isCorrectAnswer = true;
    } else {
      gridCells[index].isCorrectAnswer = false;
    }
  }
  console.log(gridCells);
  return gridCells;
}

export default checkComplete;
