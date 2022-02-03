import '../styles/circle.css';

const Circle = (props) => {
  return (
    <div className="circle">
      <div className="overlay">
        <p className="title">{props.title}</p>
      </div>
      <img className="photo" src={props.photo} alt="ma photo" />
    </div>
  )
}

export default Circle;