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
        <div className='body-parcours'>
        <br />
        <h4>Études</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eligendi tempore, itaque pariatur dolor adipisci quae facilis veniam aliquid iste, eum laborum natus distinctio est assumenda dicta harum illum consequatur!</p>
        <br />
        <h4>Expérience professionnelle</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, odit reiciendis sunt eos velit, aliquam aut libero, possimus optio a deserunt voluptate dolore alias! Ex pariatur nesciunt odio possimus porro?</p>
        </div>
      </Modal>
    </div>
  )
}

export default Parcours;