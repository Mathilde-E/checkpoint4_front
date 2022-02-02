import './App.css';
import Circle from './components/Circle';
import SmallCircle from './components/SmallCircle';
import thinkingWoman from './thinking_woman.png';
import path from './path.jpeg';

function App() {
  return (
    <div className="web-page">
      <div className="circle-photo">
      <Circle photo={thinkingWoman}/>
      </div>
      <div className="circle-path">
        <SmallCircle img={path} />
      </div>
    </div>
  );
}

export default App;
