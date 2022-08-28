
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import "./Main.scss"

const Main = ()=>{
  return (
    <div className="grid-container">
      <header className="header">
        <h4>Ebsco Training</h4>
      </header>
      <div className="main-content">
        <ErrorBoundary>
          <Outlet/>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Main;