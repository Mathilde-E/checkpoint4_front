import { FaPen } from 'react-icons/fa';
import axios from 'axios';
import '../styles/title.css';

const Title = ({ category_id, content}) => {

  const handleTitle = async (promptText, id) =>{
    if (id === undefined) {
      const body = {
        category_id: 1,
        text: promptText,
      }
    await axios.post('http://localhost:5000/content/2', body);
    window.location.reload();
    }
    const body= {
      category_id: 1,
      text: content? promptText: ' ',
    };
    await axios.put(`http://localhost:5000/content/2`, body);
    window.location.reload();
  };

  return (
    <div className="title-page">
      <FaPen 
        style={{ 'color':'rgb(180, 158, 180)'}}
        onClick={() => handleTitle(prompt('Nouveau texte'), content?.id)}
        />
      <h1>{content? content.text : ""}</h1>
    </div>
  );
};

export default Title;
