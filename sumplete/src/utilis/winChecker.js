function winChecker(props) {
  let { gridCells } = props;
  for (let i = 0; i < 16; i++) {
    if (((i + 1) % 4 === 0 || i > 11) && i !== 15) {
      if (!gridCells[i].isCorrectAnswer) {
        return false;
      }
    }
  }
  return true;
}
export default winChecker;