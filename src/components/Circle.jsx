import '../styles/circle.css';

const Circle = (props) => {
  return (
    <div className="circle">
      <img className="photo" src={props.photo} alt="ma photo" />
      <p className="title">{props.title}</p>
    </div>
  )
}

export default Circle;