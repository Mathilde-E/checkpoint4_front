import '../styles/smallCircle.css';

const SmallCircle = (props) => {
  return (
    <div className="small-circle">
      <p>{props.title}</p>
      <img src={props.img} alt="catégorie" className="img-category" />
    </div>
  )
}

export default SmallCircle;