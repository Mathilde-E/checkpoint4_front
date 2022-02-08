import Modal from 'react-modal';
import '../styles/parcours.css';

Modal.setAppElement('#root');

const Parcours = (props) => {
  return(
    <div>
      <Modal className="modal-parcours" isOpen={props.isOpen} onRequestClose={props.onRequestClose}
      style={{
        overlay:{
          backgroundColor: 'rgba(101, 189, 255, 0.41)'
        }
      }} >
        <h2>Mon Parcours</h2>
      </Modal>
    </div>
  )
}

export default Parcours;