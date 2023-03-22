
import '../../index.css';
import MyComponent from "../../utilis/Generete";
function Table() {
  return (
    <div className="grid">
      <MyComponent gridSize={4} numberSize={3}/>
    </div>
  );
}

export default Table;