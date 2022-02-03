import '../styles/smallCircle.css';

const SmallCircle = (props) => {
  return (
    <div className="small-circle" style={{ "background-image" : `url(${props.img})`, "width": "250px", "height": "250px", "background-size":"cover"}}  alt="catégorie" >
      <p>{props.title}</p>
    </div>
  )
}

export default SmallCircle;