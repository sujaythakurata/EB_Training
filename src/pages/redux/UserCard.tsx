import { userValue } from "../../types/user";
import "./redux.scss";
const UserCard = (props:userValue)=>{
  return (

    <div className="card user-card">
      <div className="card-header text-left">
        <h5>
          {props.id}
        </h5>
      </div>
      <div className="card-body">
        Name: <span className="text-success">{props.name}</span>
        Age: <span>{props.age}</span>
      </div>
    </div>

  )
}

export default UserCard;