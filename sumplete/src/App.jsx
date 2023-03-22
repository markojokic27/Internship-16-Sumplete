import Game from './commponents/Game';
import Title from './commponents/Title';
import './index.css';
function App() {
  return (
    <div>
      <Title/>
      <Game gridSize={4}/>
    </div>
  );
}

export default App;
