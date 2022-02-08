import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import '../styles/languages.css';
import axios from 'axios';
import {FaTrash} from 'react-icons/fa';

Modal.setAppElement('#root');

const Languages = (props) => {

  const [languagesList, setLanguagesList] = useState([]);

  const getLanguages = () => {
    axios.get("http://localhost:5000/content")
    .then(({data}) => {
      setLanguagesList(data.filter((item)=> item.category_id === 3));
    })
  };

  useEffect(() => {
    getLanguages();
  }, []);

  const deleteLanguage = (id) => {
    axios.delete(`http://localhost:5000/content/${id}`);
      window.location.reload();
    }

  return(
    <div>
      <Modal className="modal-languages" isOpen={props.isOpen} onRequestClose={props.onRequestClose}
      style={{
        overlay:{
          backgroundColor: 'rgba(101, 189, 255, 0.41)'
        }
      }} >
        <h2>Outils et Langages</h2>
        <div className='body-languages'>
        <br />
        <div>
          {languagesList.map((val, key) => {
            return(
              <div>
                <img className='lang-img' src={val.image} alt={val.text} />
                <p>{val.text}</p>
                <FaTrash onClick={()=> deleteLanguage(val.id)} />
              </div>
            )
          })}
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Languages;