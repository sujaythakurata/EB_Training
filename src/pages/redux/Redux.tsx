
import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { addName } from "../../features/userSlice";
import { userValue } from "../../types/user"
import UserCard from "./UserCard"
import "./redux.scss";

 
 const Redux = ()=>{
  const userData = useAppSelector((state)=>state.user.userValue);
  const dispatch = useAppDispatch();
  const addUser = (event:any)=>{
    event.preventDefault();
    let data:userValue = {
      id:userData.length + 1,
      name: event.target[0].value,
      age: event.target[1].value
    };
    dispatch(addName(data));
    return false;
  }
  return (
    <div className="content-area">
      <div className="content">
        <section className="form-area">
          <form onSubmit={addUser}>
            <div className="form-group">
              <input type="text" name="name" className="form-control" minLength={5} placeholder="Enter Name"/>
            </div>
            <div className="form-group">
              <input type="number" name="age" className="form-control" min={12} max={60} placeholder="Enter Age"/>
            </div>
            <button className="btn btn-success" type="submit">
              Add User
            </button>
          </form>
        </section>
        <section className="user-details">
          <div className="header">User Details</div>
          {userData.map((u:userValue)=><UserCard key={u.id} {...u}/>)}
        </section>
      </div>
    </div>
  )
}

export default Redux;