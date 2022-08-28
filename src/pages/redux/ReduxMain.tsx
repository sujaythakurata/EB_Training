import { Link, Outlet } from "react-router-dom";
import Back from "../Back";
import "./redux.scss";
export default function ReduxMain (){
  return (
      <div className="main-area">
        <Back/>
        <Link className="btn btn-primary" to={"basic"}>
          Redux Basic
        </Link>
        <Link className="btn btn-success m-1" to={"thunk"}>
          Redux Thunk
        </Link>
        <Link className="btn btn-danger m-1" to={"/"}>
          Home
        </Link>
        <Outlet/>
      </div>
  )
}