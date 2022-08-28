
import { IMenu } from "../../types/menu";
import "./cardmenu.scss";
import { Link } from "react-router-dom";

export default function Menu(props:IMenu){
  return (
    <Link to={props.url} className="card menu-card">
      <div className="card-body">
        <p>
          {props.title}
        </p>
      </div>
    </Link>
  );


}