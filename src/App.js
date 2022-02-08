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
import Parcours from './components/Parcours';

/* eslint-disable no-unused-expressions */

function App() {
  const [parcoursOpen, setParcoursOpen] = useState(false);
  const [content, setContent] = useState('');
  // const [categ, setCateg] = useState([]);

  useEffect(()=> {
   axios.get('http://localhost:5000/content')
   .then((response) => setContent(response.data[0]))
  }, [])

  return (
    <div className="web-page" >
      <div className="circle-photo" >
      <Circle photo={thinkingWoman} title="À PROPOS DE MOI" />
      </div>
      <div className="circle-path" onClick={()=> setParcoursOpen(true)}>
        <SmallCircle img={path} title="PARCOURS"/>
      </div>
      <Parcours isOpen={parcoursOpen} onRequestClose={()=> setParcoursOpen(false)}/>
      <div className="circle-tools">
        <SmallCircle img={tools} title="OUTILS ET LANGUAGES" />
      </div>
      <div className="circle-creations">
        <SmallCircle img={creations} title="CRÉATIONS" />
      </div>
      <TitlePage
      content={content}
      />
     <div className='admin-panel'></div>
    </div>
  );
}

export default App;
