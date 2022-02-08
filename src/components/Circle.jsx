import '../styles/circle.css';

const Circle = (props) => {
  return (
    <div className="circle">
      <img className="photo" src={props.photo} alt="ma photo" />
      <div className="overlay">
        <p className="title">{props.title}</p>
      </div>
    </div>
  )
}

export default Circle;