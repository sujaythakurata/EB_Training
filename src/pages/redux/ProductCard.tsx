import { Products } from "../../types/products";
import "./redux.scss";
export default function ProductCard (props:Products){
  return (
    <div className="card user-card">
      <div className="card-header">
        <h4>
          {props.id}
        </h4>
      </div>
      <div className="card-body">
        <p>
          Title: <span>{props.title}</span>
        </p>
        <img className="img" src={props.image} alt={props.title} />
        <p>
          Price: <span className="text-info">Rs.{props.price}</span>
          Category: <span className="text-info">{props.category}</span>
        </p>
      </div>
    </div>
  )
}