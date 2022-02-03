import './App.css';
import Circle from './components/Circle';
import SmallCircle from './components/SmallCircle';
import TitlePage from './components/Title';
import thinkingWoman from './thinking_woman.png';
import path from './path.jpeg';
import tools from './tools.jpeg';
import creations from './creations.jpg~';
import { useEffect, useState } from 'react';
import axios from 'axios';

/* eslint-disable no-unused-expressions */

function App() {

  const [content, setContent] = useState('');

  useEffect(()=> {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('http://localhost:5000/content/1')
    .then(res => setContent(res.data));
    console.log(content);
  }

  return (
    <div className="web-page" >
      <div className="circle-photo" >
      <Circle photo={thinkingWoman} title="À PROPOS DE MOI" />
      </div>
      <div className="circle-path">
        <SmallCircle img={path} title="PARCOURS" />
      </div>
      <div className="circle-tools">
        <SmallCircle img={tools} title="OUTILS ET LANGUAGES" />
      </div>
      <div className="circle-creations">
        <SmallCircle img={creations} title="CRÉATIONS" />
      </div>
      <TitlePage 
       text={content.text}
     />
    </div>
  );
}

export default App;
