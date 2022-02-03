// import { FaPen } from 'react-icons/fa';
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import '../styles/title.css';

const Title = (props) => {

  return (
    <div className="title-page">
      {/* <FaPen 
        style={{ 'color':'rgb(180, 158, 180)'}}
        onClick={() => handleTitle(prompt('Nouveau texte'), text[0]?.id)}/> */}
      <p>{props.text}</p>
    </div>
  );
};

export default Title;
